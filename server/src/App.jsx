import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import CollectionDetails from "./pages/CollectionDetails";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="/collections" exact component={<Collections />} />
        <Route path="/collections/:id" component={<CollectionDetails />} />
        <Route path="/profile" component={<Profile />} />
        <Route path="/admin" component={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
