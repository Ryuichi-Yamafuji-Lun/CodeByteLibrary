import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../config/Config';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

const BookDetail = () => {
  const { isbn } = useParams(); 
  const [bookData, setBookData] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  // Function to fetch comments
  const fetchComments = (isbn) => {
    const bookRef = collection(database, 'Books');
    const q = query(bookRef, where('isbn', '==', isbn));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setBookData(doc.data());

        // Now that we have the book data, let's fetch the comments
        const commentsRef = collection(doc.ref, 'comments');
        getDocs(commentsRef).then((commentsSnapshot) => {
          const fetchedComments = [];
          commentsSnapshot.forEach((commentDoc) => {
            fetchedComments.push(commentDoc.data());
          });
          setComments(fetchedComments);
        });
      });
    });
  };

  // Function to post comments
  const addComment = () => {
    if (newComment.trim() === '') {
      // Don't add empty comments
      return;
    }
  
    // Construct a query to find the book document with a matching ISBN
    const bookQuery = query(collection(database, 'Books'), where('isbn', '==', isbn));
  
    // Fetch the book document based on the query
    getDocs(bookQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Access the book document's reference
          const bookRef = doc.ref;
  
          // Create a reference to the "comments" sub-collection within the book document
          const commentsRef = collection(bookRef, 'comments');
  
          // Add the new comment to the "comments" sub-collection
          addDoc(commentsRef, {
            text: newComment,
          })
            .then(() => {
              setNewComment(''); // Clear the comment input
              fetchComments(isbn); // Refresh comments
              console.log('Comment added successfully');
            })
            .catch((error) => {
              console.error('Error adding comment: ', error);
            });
        });
      })
      .catch((error) => {
        console.error('Error finding book document: ', error);
      });
  };
  
  

  useEffect(() => {
    fetchComments(isbn);
  }, [isbn]);

  if (!bookData) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Book not found</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-4 bg-white text-black flex justify-center flex-col items-center">
      <div className="w-full mt-10">
        <div className="grid grid-cols-4 gap-4">
          {/* Section 1: Image of the Book */}
          <div className="col-span-1 flex justify-center">
            <img src={bookData.image} alt={bookData.title} className="w-auto h-auto" />
          </div>
  
          {/* Section 2: Book Details and Content */}
          <div className="col-span-2">
            <h1 className="text-3xl">{bookData.title}</h1>
            <p className="text-gray-700 text-lg">Author: {bookData.author || 'Unknown'}</p>
            <p className="text-gray-700 text-lg mb-4">ISBN: {bookData.isbn || 'ISBN Not Available'}</p>
            <p className="text-lg mb-4">{bookData.description || 'Description Not Available'}</p>
          </div>
  
          {/* Section 3: Price and Add to Cart */}
          <div className="col-span-1 flex justify-center">
            <div className="w-64 border-2 shadow-lg rounded-lg">
              <p className="text-third-color text-lg p-4 mb-4">Price: ¥{bookData.price || 'Price Not Available'}</p>
              <div className="text-center px-2">
                <button className="w-full bg-secondary-color text-white py-2 px-5 rounded hover:scale-105">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Section 4: Comments */}
      <div className="mt-8 p-4 border-t border-gray-300 w-full">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {/* Add comment input and submit button */}
        <div className="mb-2 flex flex-col">
          <textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            onClick={addComment}
            className="mt-2 bg-secondary-color text-white py-2 px-5 rounded hover:scale-105 self-end"
          >
            Post Comment
          </button>
        </div>
        <div className="comment-container h-[200px] overflow-y-auto">
          <div>
            {comments.map((comment, index) => (
              <div key={index} className="p-4 border border-gray-300 rounded-lg">
                <p className="text-lg">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );  
};

export default BookDetail;
