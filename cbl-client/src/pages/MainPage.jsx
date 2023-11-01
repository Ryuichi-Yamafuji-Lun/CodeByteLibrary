import { useState } from 'react';
import { database } from '../config/Config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import BookCards from '../components/BookCards';
import Footer from '../components/Footer';

// Images
import BgImg from '../assets/images/HomePageIMG.jpg';
import { FaSearch } from 'react-icons/fa';

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);

  const searchBook = async () => {
    const firestore = database;
    const booksRef = collection(firestore, 'Books');
    let q;

    if (search) {
      q = query(booksRef, where('title', '==', search.toUpperCase()));
    } else {
      // Handle the case where there's no search query
      // You can use a default query or empty query, depending on your use case.
      q = query(booksRef, where('isbn', '==', ''));
    }

    try {
      const querySnapshot = await getDocs(q);
      const results = [];

      querySnapshot.forEach((doc) => {
        // Extract the data for each book
        const bookData = doc.data();
        results.push(bookData);
      });

      // Set the search results in the state
      setBooks(results);

      console.log('Search Results:', results);
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchBook();
    }
  };

  const WelcomeStyle = {
    backgroundImage: `url(${BgImg})`,
  };

  return (
    <div className="h-screen">
      <div style={WelcomeStyle} className="bg-cover bg-center h-full relative">
        <div className="h-full absolute inset-0 flex items-center justify-center">
          <div className="p-4 text-center">
            <p className="text-6xl pt-4 text-black">CodeByte Library</p>
            <div className="mt-2 flex items-center border bg-background-main border-gray-300 rounded-lg">
              <input
                type="text"
                placeholder="Search for a Book"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
                className="w-full px-4 py-2 bg-background-main rounded-l-lg border-2 border-background-main border-r-white"
              />
              <button
                onClick={searchBook}
                className="text-white px-3 py-2 rounded-lg hover:text-secondary-color"
              >
                <FaSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {books.length > 0 && (
          <div className="bg-background-main p-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Search Results</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {books.map((book) => (
                <Link to={`/Book/${book.isbn}`} key={book.isbn} state={{ bookData: book }}>
                  <BookCards
                    title={book.title || 'Title Not Available'}
                    authors={book.author || []}
                    thumbnail={book.image || ''}
                    isbn={book.isbn || 'ISBN Not Available'}
                    price={book.price || 'Price Not Available'}
                    bookData={book}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage
