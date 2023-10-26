import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full">
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout