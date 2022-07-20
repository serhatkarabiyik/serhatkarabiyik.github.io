import React, {useState, useEffect} from 'react'
import About from './components/about/About'
import Competence from './components/competence/competence'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'

//loading
import ClockLoader from 'react-spinners/ClockLoader';



export default function App() {

  const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    }, []);
   

  return (
    <div className='App'>
                <div id={`${loading ?"preloader":"hide"}`}>
                    <ClockLoader color={"#18B7BE"} loading={loading}  size={50} />
                </div>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Competence></Competence>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
