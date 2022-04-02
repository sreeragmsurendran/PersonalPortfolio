import styled from "styled-components"
import Title from "./Title"
import portfolio1 from "assets/portfolio1.png"
import portfolio2 from "assets/portfolio2.png"
import placeholder from "assets/placeholder.png"
import loadmore from "assets/loadmore.png"
import {motion } from "framer-motion"
import { useScroll } from "./useScroll"
import {portfolioAnimations} from "animation"

function Portfolio() {
  const [element,controls]=useScroll();
  return (
    <Section id="portfolio" ref={element}>
      <Title value="Portfolio" />
      <div className="background">
        <img src={portfolio1} alt="" className="design1" />
        <img src={portfolio2} alt="" className="design2" />
      </div>
      <div className="protfolio__title">
        <p>My Works</p>
        <h2>Please check My super awesome portfolio</h2>
      </div>
      <div className="grid">
        <motion.div variants={portfolioAnimations} animate={controls} transition={{
          delay:0.03,
          duration:0.8,
          type:"tween",
        }}
        className="child-one grid-box">
          <a href="https://dataservicestheme.herokuapp.com/">
          <img src={placeholder} alt="placeholder" />
          </a>
        </motion.div >
        <motion.div variants={portfolioAnimations} animate={controls} transition={{
          delay:0.03,
          type:"tween",
          duration:0.8,
        }} className="child-two grid-box">
          <a href="https://furnituretheme.herokuapp.com">
          <img src={placeholder} alt="placeholder" />
          </a>
        </motion.div >
        <motion.div variants={portfolioAnimations} animate={controls} transition={{
          delay:0.03,
          type:"tween",
          duration:0.8,
        }} className="child-three grid-box">
          <img src={placeholder} alt="placeholder" />
        </motion.div >
        <motion.div variants={portfolioAnimations} animate={controls} transition={{
          delay:0.03,
          type:"tween",
          duration:0.8,
        }} className="child-four grid-box">
          <img src={placeholder} alt="placeholder" />
        </motion.div >
        <motion.div variants={portfolioAnimations} animate={controls} transition={{
          delay:0.03,
          type:"tween",
          duration:0.8,
        }} className="child-five grid-box">
          <img src={placeholder} alt="placeholder" />
        </motion.div >
        <motion.div variants={portfolioAnimations} animate={controls} transition={{
          delay:0.03,
          type:"tween",
          duration:0.8,
        }} className="child-six grid-box">
          <img src={placeholder} alt="placeholder" />
        </motion.div >
        <motion.div variants={portfolioAnimations} animate={controls} transition={{
          delay:0.03,
          type:"tween",
          duration:0.8,
        }} className="child-seven grid-box">
          <img src={placeholder} alt="placeholder" />
        </motion.div >
        <motion.div variants={portfolioAnimations} animate={controls} transition={{
          delay:0.03,
          type:"tween",
          duration:0.8,
        }} className="child-eight grid-box">
          <img src={placeholder} alt="placeholder" />
        </motion.div >
      </div>
      <div className="portfolio_more">
        <span>Load More</span>
        <img src={loadmore} alt="load more"/>
      </div>
    </Section>
  )
}
const Section = styled.div`
min-height: 100vh;
padding: 2rem 0;
background-color: var(--secondary-color);
.background{
  position: relative;
  .design1{
    position: absolute;
    z-index: 1;
    right: 9%;
    top: 0;
  }
  .design2{
    position: absolute;
    left: 0;
    z-index: 1;
    top: 30rem;
    height: 40rem;
  }
}
.sideTitle{
  z-index: 2;
  h1{
    color: white;
  }
}
.protfolio__title{
  margin: 6rem 15rem;
  p{
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  h2{
    color: white;
    font-size: 2rem;
  }
}
.grid{
  height: 0 15rem;
  width: 100%;
  padding: 0 15rem;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-areas: 
    "one one two two"
    "one one three four"
    "five six  seven  seven"
    "eight  six seven  seven" ;
  .grid-box{
    height: 15rem;
    width: 100%;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img{
      transition: 0.4s ease-in-out;
      &:hover{
        
          transform: scale(1.2);
      
      }
    }
    &:nth-of-type(1){
        grid-area: one;
        height: 100%;
        background-color:#8860e66a ;
        z-index: 10;
       
    }
    &:nth-of-type(2){
        grid-area: two;
        background-color: #662d91ca;
        z-index: 10;
    }
    &:nth-of-type(3){
        grid-area: three;
        background-color: #8860e6b0;
        
    }
    &:nth-of-type(4){
        grid-area: four;
    }
    &:nth-of-type(5){
        grid-area: five;
        background-color: #8860e6b0;
        z-index: 10;
    }
    &:nth-of-type(6){
        grid-area: six;
        background-color: #662d91ca;
        height: 100%;
       
    }
    &:nth-of-type(7){
        grid-area: seven;
        background-color: #8860e66a;
        height: 100%;
   
    }
    &:nth-of-type(8){
        grid-area: eight;
        z-index: 10;
    }
  }
  }
  .portfolio_more{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 2rem;
    span{
      color: white;
      font-size:1.2rem;
    }
    img{
      height: 3rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width:1080px){
    .background{
      display: none;
    }
    .protfolio__title{
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2{
        font-size: 1.5  rem;
      }
    }
    .grid{
      padding: 2rem 4rem;
      grid-template-columns: 1fr;
      grid-template-areas: 
      "one"
      "two"
      "three"
      "four"
      "five"
      "six"
      "seven"
      "eight";
      .grid-box{
          height: 10rem !important;
      }
      ;
    }
  }

`

export default Portfolio