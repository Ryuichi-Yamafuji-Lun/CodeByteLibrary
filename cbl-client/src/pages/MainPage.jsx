import { useState } from 'react';
import axios from 'axios';
import BookCards from '../components/BookCards';

// Images
import BgImg from "../assets/images/HomePageIMG.jpg";
import { FaSearch } from 'react-icons/fa';

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);

  const searchBook = () => {
    axios
      .get(
        
      )
      .then((response) => {
        console.log(response.data)
        setBooks(response.data.items || []);
      })
      .catch((error) => {
        console.error(error);
      });
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
      <div className="bg-background-main p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Search Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {books.map((book, index) => (
            <BookCards
              key={index}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors || []}
              thumbnail={book.volumeInfo.imageLinks?.thumbnail || ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage
