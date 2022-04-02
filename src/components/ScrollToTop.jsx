import styled from "styled-components"
import { FaChevronUp } from "react-icons/fa"
import { useState } from "react";

function Scrolltotop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll",()=>{
    window.pageYOffset >100 ? setVisible(true) :setVisible(false);
  })
  return (
    <Div>
      <a href="#" className={`${visible ? "block" :"none"}`} >
        <FaChevronUp/>
      </a>    
      </Div>
  )
}
const Div=styled.div`
max-width:100vw;
.none{
  opacity: 0;
  visibility: hidden;

}
a{
  position:fixed;
  bottom: 40px;
  right: 40px;
  background-color: var(--secondary-color);
  padding: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition :0.4s ease-in-out;
  z-index: 100;
  svg{
    color: white;
    font-size: 1.2rem;
  }
}
`
export default Scrolltotop