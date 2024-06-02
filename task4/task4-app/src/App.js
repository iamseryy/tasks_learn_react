import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {AboutPage} from "./components/AboutPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}




export default App;
