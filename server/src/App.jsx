import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import ItemPage from "./pages/ItemPage";
import UserProfile from "./pages/UserProfile";
import AdminPage from "./pages/AdminPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "./index.css";
import { AuthProvider } from "./hooks/useAuth";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/collection/:collectionId"
              element={<CollectionPage />}
            />
            <Route path="/item/:itemId" element={<ItemPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
