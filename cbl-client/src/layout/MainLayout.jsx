import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout