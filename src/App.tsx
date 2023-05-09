import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";
import BookDetails from "./pages/BookDetails/BookDetails";
import BookShelves from "./pages/BookShelves/BookShelves";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import React from "react";
function App() {
  const token = localStorage.getItem("token");
  return (
    <Routes>
      {!token && <Route path="/SignUp" element={<SignUp />} />}
      {!token && <Route path="/SignIn" element={<SignIn />} />}
      <Route path="/" element={<BookShelves />} />
      <Route path="/BookSearch" element={<SearchPage />} />
      <Route path="/books/:bookid" element={<BookDetails />} />
    </Routes>
  );
}

export default App;
