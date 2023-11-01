import { useLocation } from 'react-router-dom';

const BookDetail = () => {
  const location = useLocation();
  const bookData = location.state?.bookData;

  if (!bookData) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Book not found</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-4 bg-white text-black flex justify-center">
      <div className="w-full">
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
            <div className='w-64 border-2 shadow-lg rounded-lg'>
              <p className="text-third-color text-lg p-4 mb-4">Price: ¥{bookData.price || 'Price Not Available'}</p>
              <div className="text-center px-2">
                <button className="w-full bg-secondary-color text-white py-2 px-5 rounded hover:scale-105">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;