import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar.jsx" // Corrected component name
import Home from "./pages/navbar/Home.jsx" // Corrected file path and casing
import Extra from "./pages/navbar/Extra.jsx" // Corrected file path and casing
import Comp from "./pages/navbar/Comp.jsx" // Corrected file path and casing
import Text from "./pages/navbar/Text.jsx" // Corrected file path and casing
import Misc from "./pages/navbar/Misc.jsx" // Corrected file path and casing

function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/text' component={Text} />
        <Route path='/comp' component={Comp} />
        <Route path='/misc' component={Misc} />
        <Route path='/extra' component={Extra} />
      </Routes>
    </Router>
  );
}

export default App;