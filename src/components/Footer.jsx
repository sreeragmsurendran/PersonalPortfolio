import {BsBehance , BsFacebook ,BsTwitter, BsYoutube} from "react-icons/bs"
import styled from "styled-components"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"
import { footerAnimations } from "animation"
import {AiOutlineLinkedin ,AiFillGithub} from "react-icons/ai"
import {CgMail} from "react-icons/cg"

function Footer() {
  const [element,controls] =useScroll();
  
  return (
    <Foot ref={element}
    variants={footerAnimations} animate={controls}
      transition={{
      delay:0.03,
      type:"tween",
      duration:0.8,
    }}
    
    >
      <span>&copy; Template created with love by Sreerag</span>
      <div className="footer__social__icons" >
       <a href="https://www.linkedin.com/in/sreerag-m-surendran-6a849b180/"><AiOutlineLinkedin/></a>
       <a href="mailto: sreeragmsurendran1997@gmail.com" ><CgMail/></a>
       <a href="https://github.com/sreeragmsurendran"><AiFillGithub/></a>
      </div>
    </Foot>
  )
}
const Foot =styled(motion.footer)`
  display: flex;
  background-color: var(--primary-color);
  padding: 5rem 10rem;
  justify-content: space-between;
  color: white;
  .footer__social__icons{
    display: flex;
    flex-direction:end;
    gap: 2rem;
    svg{
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      color: white;
      &:hover{
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width:1080px){
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
  }
`;
export default Footer