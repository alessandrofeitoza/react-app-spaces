import { BrowserRouter } from "react-router-dom";
import Routes from "./config/Routes";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

