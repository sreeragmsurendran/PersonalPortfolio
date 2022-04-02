import styled from "styled-components"
import service1 from "assets/service1.png"
import service2 from "assets/service2.png"
import service3 from "assets/service3.png"
import play from "assets/play.png"
import Title from "./Title"
import {motion } from "framer-motion"
import { useScroll } from "./useScroll"
import { serveAnimations } from "animation"

function Services() {
  const [element, control] =useScroll();
  const data = [
    {
      type: "Design",
      text: "I value simple content structure, clean design patterns, and thoughtful interactions.",
      image: service1

    },
    {
      type: "Code",
      text: "I like to code things from scratch, and enjoy bringing ideas to life in the browser. ",
      image: service2

    },
    {
      type: "Mentor",
      text: "I genuinely care about people, and love helping fellow designers work on their craft.",
      image: service3

    }
  ]

  return (
    <Section id="services" ref={element}>
      <Title value="services"/>
        <div className="services">
          {data.map(({ type, text, image }, index) => {
              return (<motion.div className="services__service" key={index}
              variants={serveAnimations}
              transition={{delay:0.3 ,duration:0.8,type:"tween"}}
              
              >
                  <div className="services__service__image">
                    <img src={image} alt="services" />
                  </div>
                  <div className="services__service__title">
                    <span>0{index + 1}</span>
                    <h2>{type}</h2>
                  </div>
                  <p className="services__service__description">{text}</p>
                  <img src={play} alt="Play" />

                </motion.div>
              );
            })
          }
        </div>
    </Section>
  )
}
const Section = styled.div`
min-height: 100vh;
.services{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-items: center;
  height: 100%;
  margin: 0 14rem;
  margin-top: 14rem;
  gap: 5rem;
  &__service{
    padding: 2rem;
    &:nth-of-type(3){
      background-color: var(--primary-color);
      .services__service__title{
        color: white;
      }
      .services__service__description{
        color: white;
      }
      span{
        color: white;
      }
    }
    &__image{
        margin-bottom: 3rem;
      }
    &__title{
      span{
        color: var(--primary-color);
        font-weight:bolder;
      }
      h2{
        font-size: 3rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }
    }
    &__description{
      color: var(--primary-color);
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width:1080px){
  .services{
    margin: 2rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}
`
export default Services