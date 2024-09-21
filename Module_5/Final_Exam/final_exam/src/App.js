import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import ListCloth from "./components/clothes/ListCloth";
import UpdateClothe from "./components/clothes/UpdateClothe";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="nav-link-buttons">
          <NavLink to="/clothes">Danh sách</NavLink>
        </div>
        <Routes>
          <Route path="/clothes" element={<ListCloth/>}></Route>
          <Route path="/clothes/UpdateClothe" element={<UpdateClothe/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
