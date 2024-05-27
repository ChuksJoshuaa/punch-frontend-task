import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer, Layout, Navbar } from "./components";
import { Dashboard, ErrorPage } from "./pages";

const App = () => {
  return (
    <div
      className="main-container my-7 overflow-x-hidden"
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
