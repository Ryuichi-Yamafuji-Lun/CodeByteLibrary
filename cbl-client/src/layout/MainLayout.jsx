import Footer from "../components/Footer";
import TopBooks from "../pages/TopBooks";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full">
      <div>
        {children}
      </div>
      <div>
        <TopBooks />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout