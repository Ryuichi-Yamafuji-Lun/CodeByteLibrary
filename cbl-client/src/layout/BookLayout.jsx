import Header from "../components/Header"

const BookLayout = ({ children }) => {
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

export default BookLayout