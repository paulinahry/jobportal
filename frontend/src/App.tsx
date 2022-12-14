
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Components
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import Account from "./Pages/Account";
import AdsList from "./Pages/AdsList";
import AuthRequired from "./Pages/AuthRequired";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import PostAd from "./Pages/PostAd";
import Register from "./Pages/Register";
import SingleAd from "./Pages/SingleAd";

function App() {

  return (
    <div className="bg-background h-[100vh]">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/adslist" element={<AdsList />} />
          <Route path="/ad/:id" element={<SingleAd />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/account" element={<Account />} />
          <Route path="/auth-required" element={<AuthRequired />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );

}

export default App;
