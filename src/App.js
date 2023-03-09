import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* Home with search on */}
          <Route path="/" element={<Home />} />
          {/* SearchPage the results */}
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
