const SiteMap = () => {
    return (
      <div className="flex flex-col items-center p-4">
        <div className="mb-4">
          <h1 className="text-4xl font-bold underline">Site Map</h1>
        </div>
        <div className="w-full max-w-xl">
          <ul className="list-inside">
            <li className="mb-6">
              <h2 className="text-2xl font-semibold">Header</h2>
              <ul className="ml-6 list-disc">
                <li>Home Page</li>
                <li>About Page</li>
                <li>Shopping Cart</li>
              </ul>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold">Main Page</h2>
              <ul className="ml-6 list-disc">
                <li>Search Function</li>
                <li>Search Result</li>
              </ul>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold">About</h2>
              <ul className="ml-6 list-disc">
                <li>About the Company</li>
                <li>Site Map</li>
              </ul>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold">Book Detail</h2>
              <ul className="ml-6 list-disc">
                <li>Product Detail</li>
                <li>Add to Cart</li>
                <li>Comments about Product</li>
              </ul>
            </li>
            <li className="mb-6">
              <h2 className="text-2xl font-semibold">Footer</h2>
              <ul className="ml-6 list-disc">
                <li>Privacy Policy</li>
                <li>Access Policy</li>
                <li>Site Policy</li>
                <li>Contact Form</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default SiteMap;
  