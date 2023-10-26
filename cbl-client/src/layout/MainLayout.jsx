import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen">
      <div>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout