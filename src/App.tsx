import { Routes, Route, useNavigate } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";
import BookDetails from "./pages/BookDetails/BookDetails";
import BookShelves from "./pages/BookShelves/BookShelves";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import React, { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/SignUp");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <Routes>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/" element={<BookShelves />} />
      <Route path="/BookSearch" element={<SearchPage />} />
      <Route path="/books/:bookid" element={<BookDetails />} />
    </Routes>
  );
}

export default App;
