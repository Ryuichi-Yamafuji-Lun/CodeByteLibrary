import { Routes, Route } from "react-router-dom";
// Layouts
import MainLayout from "./layout/MainLayout";
import OrderLayout from "./layout/OrderLayout";
import BookLayout from "./layout/BookLayout";
// Pages
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import BookDetail from "./pages/BookDetail";
import OrderDetail from "./pages/OrderDetail";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><MainPage /></MainLayout>} />
      <Route path="/About" element={<MainLayout><About /></MainLayout>} />
      <Route path="/BookDetail" element={<BookLayout><BookDetail /></BookLayout>} />
      <Route path="/OrderDetail" element={<OrderLayout><OrderDetail /></OrderLayout>} />
    </Routes>
  );
}

export default App;
