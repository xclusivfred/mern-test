import "./App.css";
import { Routes, Route } from "react-router-dom";
import PropertyHistory from "./components/properties-history";
import PropertyList from "./components/properties-list";
import NotFound from "./pages/Not-found";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PropertyHistory />} />
        <Route path="/list" element={<PropertyList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
