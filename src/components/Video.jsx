import styled from "styled-components"
import video1 from "assets/video1.png"
import video2 from "assets/video2.png"
import { videoAnimations } from "animation"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"


function Video() {
  const [element,controls] =useScroll()
  return (
    <Section ref={element}>
       <div className="background">
        <img src={video1} alt="" className="design1" />
        <img src={video2} alt="" className="design2" />
      </div>
      <motion.div className="video" 
      variants={videoAnimations} animate={controls}
      transition={{
        delay:0.03,
        type:"tween",
        duration:0.8,
        }}
        >
      <iframe width="985" height="554" src="https://www.youtube.com/embed/2Bzep2qAjHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </motion.div>
    </Section>
  )
}
const Section =styled.section`
  height: 100vh;
  background-color: #662d91aa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  .video{
    z-index: 10;
  }
  .background{
    .design1{
      position: absolute;
      left: 0;
      bottom: -8rem;
    }
    .design2{
      right: 5rem;
      position: absolute;
      top: 2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width:1080px){
    .background{
      display: none;
    }
    height: 100%;
    padding: 6rem 2rem;
    .video{
      iframe{
        height: 10rem;
        width: 80vw;
      }
    }
  }
`
export default Video