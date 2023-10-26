import Header from "../components/Header";

const OrderLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default OrderLayout