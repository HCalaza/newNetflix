import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/header.js";
import Footer from "./Footer/footer.js";
import WrapperList from "./WrapperList/WrapperList.js";
// import Form from "./WrapperForm/Form.js";
import Selection from "./WrapperForm/Selection.js";
import Input from "./WrapperForm/Input.js";
import Input2 from "./WrapperForm/Input.js";
import Button from "./WrapperForm/Button.js";

function App() {
  return (
    <div className="App">
      <Header />
      <WrapperList />
      <Selection />
      <Input />
      <Input2 />
      <Button />
      {/* NAV*/}
      {/* TAB SELECTED*/}
      {/* TAB DESELECTED*/}

      {/* CONTENT*/}
      {/* WRAPPER LIST*/}
      {/* WRAPPER FORM*/}

      <Footer />
    </div>
  );
}

export default App;
