import { Routes, Route } from "react-router-dom";
import Headroom from "react-headroom";
// Layouts
import DefaultLayout from "./layout/DefaultLayout";
import MainLayout from "./layout/MainLayout";
import SecondaryLayout from "./layout/SecondaryLayout";
// Pages
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import BookDetail from "./pages/BookDetail";
import OrderDetail from "./pages/OrderDetail";
// Header
import Header from "./components/Header";


function App() {
  return (
    <div>
      <Headroom >
        <Header />
      </Headroom>
      <Routes>
        <Route path="/" element={<MainLayout><MainPage /></MainLayout>} />
        <Route path="/About" element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/BookDetail" element={<SecondaryLayout><BookDetail /></SecondaryLayout>} />
        <Route path="/OrderDetail" element={<SecondaryLayout><OrderDetail /></SecondaryLayout>} />
      </Routes>
    </div>
  );
}

export default App;
