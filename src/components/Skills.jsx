import skills1 from "assets/skills1.png"
import skills2 from "assets/skills2.png"
import styled from "styled-components"
import Title from "./Title"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"
import { skillsAnimations } from "animation"

function Skills() {
  const [element,controls] =useScroll();
  const skillData = [
    {
      name: "Creativity",
      amount: 75,
    },
    {
      name: "Coding",
      amount: 60,
    },
    {
      name: "React",
      amount: 90,
    },
    {
      name: "Marketting",
      amount: 70,
    },
    {
      name: "Design",
      amount: 45,
    }
  ]
  return (
    <Section id="skills" ref={element}>
      <Title value="Skills" />
      <div className="background">
        <img src={skills1} alt="skills1" className="design1" />
        <img src={skills2} alt="skills2" className="design2"/>
      </div>
      <div className="skills__title">
        <p>Our Skills</p>
        <h2>Check our super awesome skills</h2>
      </div>
      <div className="skills">
          <div className="skills__bars">
            {
              skillData.map(({name,amount},index)=>{
                return(
                    <motion.div className="skills__bars__bar" key={name}
                    variants={skillsAnimations} animate={controls}
                    transition={{
                  delay:0.03,
                  type:"tween",
                  duration:0.8,
                  }}
                    >
                        <div className="container">
                          <progress value={amount} max="100" />
                          <span>{name}</span>
                        </div>
                        <h3>{amount}</h3>
                    </motion.div>
                )
              })
            }
          </div>
          <div className="skills__content">
            <p className="title">
            Here are a few technologies I’ve been working with recently:
            </p>
            <div className="descripition">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Javascript</li>
                <li>Django</li>
               
                <li></li>
              </ul>
            </div>
          </div>
      </div>

    </Section>
  )
}
const Section = styled.section`
min-height: 100vh;
height: 140vh;
background-color: var(--secondary-color);
.background{
  position: relative;
  .design1{
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .design2{
    position: absolute;
    left: 0;
    top: 20rem;
    z-index: 1;
  }
}
.sideTitle{
  h1{
    color: white;
    font-size: 9rem;
    z-index: 2;
    margin-left: 2.5rem;
  }
}
.skills__title{
  padding: 6rem 10rem;
  p{
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: var(--primary-color);
  }
  h2{
    color: white;
    font-size: 2rem;
  }
  
}
.skills{
    display: flex;
    padding: 0  20rem;
    gap: 10rem;
    &__bars{
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      &__bar{
      
       display: flex;
       flex-direction: row-reverse;
        gap: 1rem;
        .container{
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          span{
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--primary-color);
          }
          progress{
            width: 30rem;
            --webkit-appearance:none;
            appearance: none;
            &::-webkit-progress-bar{
              height: 3rem;
              background-color: white;
            }
            &::-webkit-progress-value{
              background-color: var(--primary-color);
            }
          }
        }
        h3{
          color: white;
          font-size: 2rem;
          transform:rotate(90deg);
        }
      }
      
    }
    &__content{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: white;
      z-index: 2;
      .title{
        font-weight: bolder;
        letter-spacing: 0.1rem;
      }

    }
    .skills__content{
      
          .descripition{
            margin-left: 2rem;
          }
      }
  }
@media screen and (min-width: 280px) and (max-width:1080px){
  overflow-x: hidden;
  padding: 2rem 0;
  height: max-content;
  .background{
    display: none;
  }
  .skills__title{
    padding: 2rem;
    text-align: center;
    h2{
      font-size:1.5rem;

    }
  }
  .skills{
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    &__bars{
      padding: 0.2rem;
      gap: 0;
      align-items: center;
      justify-content: center;
      &__bar{
        .container{
          gap: 1rem;
          progress{
            width: 12rem;
            height: 0.5rem;
            &::-webkit-progress-bar{
              height: 0.3rem;

            }
          }
        }
        h3{
          font-size: 1rem;
        }
      }
    }
    &__content{
      padding: 0 2rem;
    }
  }
}
  
`
export default Skills