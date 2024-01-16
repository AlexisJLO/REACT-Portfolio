import { Outlet } from "react-router-dom";

import Header from "./compenets/Header";
import Footer from "./compenets/Footer";
import "./App.css";

function App() {
  return (
    <>
        <Header />
          <Outlet />
        <Footer />
    </>
  );
}

export default App;
