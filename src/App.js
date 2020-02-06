import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/header.js";
import Footer from "./Footer/footer.js";
import WrapperList from "./WrapperList/WrapperList.js";
// import Form from "./WrapperForm/Form.js";

import Nav from "./Nav/Nav.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
    

      <Footer />
    </div>
  );
}

export default App;
