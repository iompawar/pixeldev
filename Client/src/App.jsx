import "./App.css";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Categories from "./Components/Others/Categories";
import User from "./Pages/User";
import Favourite from "./Pages/Favourite";
import SearchBar from "./Components/Others/SearchBar";
import SearchResult from "./Pages/SearchResult";
import LoginRegister from "./Pages/LoginRegister";

function App() {
  return (
    <div className="App-comp">
      <div>
        <Header />
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/user" element={<User />} />
          <Route path="/SearchResult/:query" element={<SearchResult/>}/>
          <Route path="/login-register" element={<LoginRegister/>}/>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
