import { Link } from "react-router-dom";

const OrderDetail = () => {
  return (
    <div className="w-full h-full flex flex-col items-center text-center justify-center">
      <div>
        <p>There is no cart functionality since it is WEB design course work. May implement in the future.</p>
      </div>
      <div>
        <Link to="/">
          <p className='hover:text-secondary-color'>Return</p>
        </Link>
      </div>
    </div>
  );
}

export default OrderDetail