const BookCards = ({ title, authors, thumbnail, isbn, price }) => {
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white transition-transform transform hover:-translate-y-1 hover:translate-x-1 hover:scale-105">
      <img src={thumbnail} alt={title} className="w-full h-48 object-contain bg-secondary-color" />
      <div className="px-6 py-2 text-black">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-700 text-base mb-2">
          Authors: {authors || "Unknown"}
        </p>
        <p className="text-sm">
          ISBN: {isbn}
        </p>
        <p className="text-black">
          Price: ¥{price}
        </p>
      </div>
    </div>
  );
}

export default BookCards;
