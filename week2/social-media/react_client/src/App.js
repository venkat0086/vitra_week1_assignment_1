import React from "react";
import { Routes, Route } from "react-router-dom";
import AddImage from "./screens/AddImage";
import ShowImages from "./screens/ShowImages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowImages />} />
      <Route path="/addimage" element={<AddImage />} />
    </Routes>
  );
};

export default App;
