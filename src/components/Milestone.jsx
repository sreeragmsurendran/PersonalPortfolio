import milestone1 from "assets/milestone1.png"
import milestone2 from "assets/milestone2.png"
import milestone3 from "assets/milestone3.png"
import milestonebackground from "assets/milestone-background.png"
import styled from "styled-components"
import {motion } from "framer-motion"
import { useScroll } from "./useScroll"
import { milestoneAnimations } from "animation"

function MileStone() {
  const milestone = [{ image: milestone1, data: "Clients Served", amount: "407" },
  { image: milestone2, data: "of raw data", amount: "10T" },
  { image: milestone3, data: "recommentation", amount: "203" }
  ]
  const [element,controls]= useScroll()
  return (
    <Section ref={element}>
      <div className="background">
        <img src={milestonebackground} alt="milestonebackground" />
      </div>
      <motion.div className="milestones" variants={milestoneAnimations} animate={controls}
      transition={{
        delay:0.03,
        type:"tween",
        duration:0.8,
      }}
      > 
        {milestone.map(({ image, data, amount },index) => {
          return (
            <div className="milestone" key={index}>
              <p>{amount}</p>
              <span>{data}</span>
              <img src={image} alt="milestone"/>
            </div>
          )
        })}
      </motion.div>
    </Section>)
}
const Section = styled.section`
  height:100vh;
  background-color: var(--primary-color);
  padding-left:0 10rem;
  position: relative;
  .background{
    position: absolute;
    left: 0;
    bottom: -30%;
    img{
      height: 43rem;
      z-index: 2;
    }
  }
  .milestones{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    color: white;
    align-items: center;
    height: 100%;
    .milestone{
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      p{
        font-size: 5rem;
        font-weight: bolder;
        line-height: 3rem;
      }
      span{
        text-decoration: uppercase;
        color: #ffffffc7;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width:1080px){
    padding:5rem 2rem;
    min-height: 100vh;
    height: 100%;
    .background{
      display: none;
    }
    .milestones{
      grid-template-columns: 1fr;
      gap: 5rem;
    }
  }
`
export default MileStone