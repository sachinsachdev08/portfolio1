import './App.css';
import Navbar from './componets/navbar';
import Home from './componets/home';
import About from './componets/about';
import Resume from './componets/resume';
import Portfolio from './componets/portfolio';
import Contact from './componets/contact';
import Footer from './componets/footer';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Resume/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
