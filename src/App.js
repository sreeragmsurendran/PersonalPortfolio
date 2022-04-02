
import './App.css';
import styled from 'styled-components'
import Home from './components/Home';
import Scrolltotop from './components/ScrollToTop';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import MileStone from './components/Milestone';
import Blog from './components/Blog';
import Video from './components/Video';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from 'components/Contact';
import {motion } from 'framer-motion';

function App() {
  return (
    <motion.div initial="hidden" animate="show" >
    <Scrolltotop/>
    <Home/>
    <Services/>
    <Portfolio/>
    {/* <MileStone/> */}
    {/* <Blog/> */}
    <Video/>
    {/* <Pricing/> */}
    <Testimonial/>
    <Skills/>
    <Contact/>
    <Footer/>
    </motion.div>
  );
}
const Section =styled.div`
background-color: black;
height:100px;
`

export default App;
