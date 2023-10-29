const BookCards = ({ title, authors, thumbnail }) => {
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4 text-black">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Authors: {authors.join(", ") || "Unknown"}
        </p>
      </div>
    </div>
  );
}

export default BookCards;
