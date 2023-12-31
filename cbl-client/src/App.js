import { Routes, Route } from "react-router-dom";
import Headroom from "react-headroom";
// Layouts
import DefaultLayout from "./layout/DefaultLayout";
import SecondaryLayout from "./layout/SecondaryLayout";
// Pages
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import BookDetail from "./pages/BookDetail";
import OrderDetail from "./pages/OrderDetail";
import SiteMap from "./pages/SiteMap";
// Header
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Headroom >
        <Header />
      </Headroom>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/Book/:isbn" element={<SecondaryLayout><BookDetail /></SecondaryLayout>} />
        <Route path="/OrderDetail" element={<SecondaryLayout><OrderDetail /></SecondaryLayout>} />
        <Route path="/SiteMap" element={<SiteMap />} />
      </Routes>
    </div>
  );
}

export default App;
