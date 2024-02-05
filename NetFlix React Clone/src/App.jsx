import { useState,useEffect } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import Row from './Components/Row/Row'
import Footer from './Components/Footer/Footer'



function App() {
  const [scrolled, setScrolled] = useState(false);
  const [banner,setBanner] = useState({})
  const [target,setTarget] = useState({}) 


  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <NavBar scrolled={scrolled}/>
     <Banner />
     <Row target={target} setTarget={setTarget} title={"Action"} genres={28}/>
     <Row target={target} setTarget={setTarget} title={"Adventure"} genres={12}/>
     <Row target={target} setTarget={setTarget} title={"Animation"} genres={16}/>
     <Row target={target} setTarget={setTarget} title={"Romance"} genres={35}/>
     <Row target={target} setTarget={setTarget} title={"Comedy"} genres={10749}/>
     <Row target={target} setTarget={setTarget} title={"Documentary"} genres={99}/>
     <Row target={target} setTarget={setTarget} title={"Drama"} genres={18}/>
     <Row target={target} setTarget={setTarget} title={"Family"} genres={14}/>
     <Row target={target} setTarget={setTarget} title={"Fantasy"} genres={10749}/>
      <Footer/>     
    </>
  )
}

export default App
