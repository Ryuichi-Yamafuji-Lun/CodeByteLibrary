import { useState } from "react";
import axios from "axios";

// Image
import BgImg from "../assets/images/HomePageIMG.jpg";
import { FaSearch } from "react-icons/fa";

const MainPage = () => {
  const [search, setSearch] = useState("");

  const GOOGLE_BOOK_API_KEY = process.env.REACT_APP_GOOGLE_BOOK_API_KEY;

  const categoryQuery = "computer";
  const searchQuery = search + categoryQuery;

  const searchBook=(event)=>{
    if(event.key === "Enter"){
      axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${GOOGLE_BOOK_API_KEY}` 
      )
      .then((response) => {
        // check response
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

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
                onKeyDown={searchBook}
                className="w-full px-4 py-2 bg-background-main border-2 border-background-main border-r-white"
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
    </div>
  ); 
}

export default MainPage;
