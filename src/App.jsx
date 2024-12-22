import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Videos from "./Videos.jsx";
import Upload from "./Upload.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

function App(){

  return(

    <Router>
      <Header></Header>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/videos" element={<Videos/>}/>
       <Route path="/upload" element={<Upload/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;