
import styled from "styled-components"
import logo from "assets/logo.png"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdClose} from "react-icons/md"
import { useState } from "react"
import {motion } from "framer-motion"
import { useScroll } from "./useScroll"
import { navAnimations } from "animation"
import {AiOutlineAntDesign} from "react-icons/ai"



function Navbar() {
  const [isNaveOpen, setIsNaveOpen] = useState(false);
  const [element ,controls] =useScroll();
  return (<Nav ref={element}
    variants={navAnimations}
    transition={{delay:0.1 }}
    animate={controls}
    state={isNaveOpen ? 1 : 0}
  >
    <div className="brand__container">
      <a href="#" className="brand">
        {/* <img src={logo} alt=""/> */}
        <AiOutlineAntDesign/>
      </a>
      <div className="toggle">
        {isNaveOpen ? <MdClose
        onClick={(e)=>{
          setIsNaveOpen(false);
        }}
        /> : <GiHamburgerMenu
        onClick={(e)=>{
          e.stopPropagation();
          setIsNaveOpen(true);
        }}/>}
      </div>
    </div>
    <div className={`links ${isNaveOpen ?"show" :""}`}>
      <ul>
        <li className="active"><a href="#home">Home</a></li>
        <li ><a href="#services">Services</a></li>
        <li ><a href="#portfolio">PortFolio</a></li>
        {/* <li ><a href="#blog">Blog</a></li> */}
        <li ><a href="#skills">Skills</a></li>
        <li ><a href="#contacts">Contacts</a></li>

      </ul>
    </div>
  </Nav>
  )
}
const Nav =styled(motion.nav)`
display: flex;
justify-content: space-between;
margin: 0 12rem;
padding: 2rem;
color: white;
.brand__container{
  margin: 0 2rem;
  .toggle{
    display: none;
  }
  a{
    font-size: 4rem;
    svg{
      color: var(--secondary-color);
    }
  }
}
.links{
  ul{
    list-style: none;
    display: flex;
    gap: 3rem;
    .active{
      border-bottom: 4px solid var(--secondary-color);
    }
    li{
      a{
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1rem;
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width:1080px){
margin :0 ;
position: relative;
.brand__container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .toggle{
    padding-right: 1rem;
    display: block;
    z-index: 1;
    
  }
}
.show{
  opacity: 1 !important;
  visibility: visible !important;
}
.links{
  position: absolute;
  overflow-x: hidden;
  top: 0;
  height: 120vh;
  right: 0;
  width: ${({state})=>(state? "100%" :"0")};
  background-color: var(--secondary-color);
  opacity: 0;
  visibility: hidden;
  /* transition: 0.4s ease-in-out; */
  ul{
    flex-direction: column;
    text-align: center;
    justify-content: center;
    height: 100%;
  }
}
}

`;
export default Navbar