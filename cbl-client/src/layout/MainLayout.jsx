import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
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