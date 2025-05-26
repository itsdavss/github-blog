import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Post } from "./pages/post/Post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}

export default App;
