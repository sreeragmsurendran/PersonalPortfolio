import styled from "styled-components"
import placeholder from "assets/placeholder.png"
import testimonial1 from "assets/testimonial1.png"
import testimonial2 from "assets/testimonial2.png"
import { useState } from "react"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"
import { testimonialAnimations } from "animation"


function Testimonial() {
  const [element,controls] =useScroll();
  const [selected, setSelected] = useState(0);
  const testimonial=[
    {
      designation:"Developer",
      name:"Sreerag M S",
    
    },
    {
    designation:"Designer",
    name:"Sandra Ignatious",
  
  },
  {
    designation:"Planner",
    name:"Sreeram M S",
    
  }
]
  return (
    <Section ref={element}>
      <div className="background">
        <img src={testimonial1} alt="background" className="design1"/>
        <img src={testimonial2} alt="background" className="design2"/>
      </div>
     
      <div className="container">
     <p className="heads">Colleagues who Working With me</p>
        <div className="testimonials">
          {
            testimonial.map(({designation,name,review},index)=>{
              return(
                <motion.div className={`testimonial ${selected === index ? "" : "hidden"}`} key={index}
                variants={testimonialAnimations} animate={controls}
                transition={{
                  delay:0.03,
                  type:"tween",
                  duration:0.8,
                  }}
                >
                  <div className="image">
                    <div className="circle1"></div>
                    <div className="circle2">
                      <img src={placeholder} alt="placeholder" />
                    </div>
                  </div>
                  <div className="title-container">
                    <span className="designation">{designation}</span>
                    <h3 className="title">{name}</h3>
                  </div>
                    <p className="discription">{review}</p>
                </motion.div>
              )
            })
          }
        </div>
        <motion.div className="controls"
        variants={testimonialAnimations} animate={controls}
        transition={{
          delay:0.03,
          type:"tween",
          duration:0.8,
          }}
        >
          <button className={selected===0 ? "active" :""} onClick={()=>setSelected(0)}></button>
          <button className={selected===1 ? "active" :""} onClick={()=>setSelected(1)}></button>
          <button className={selected===2 ? "active" :""} onClick={()=>setSelected(2)}></button>
          
          
        </motion.div>
      </div>
    </Section>
  )
}
const Section =styled.section`
  overflow: hidden;
  .background{
    position: relative;
    .design1{
      position: absolute;
      left: 0;
      height:35rem;
      top:10rem;
    }
    .design2{
      position: absolute;
      right: 0;
    }
   
  }
  .container{
      min-height: 100vh;
      background-color: var(--primary-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      .heads{
        color: var(--secondary-color);
        font-size: 1.2rem;
        font-weight: bolder;
      }
      .testimonials{
        display: flex;
        text-align: center;
        justify-content: center;
        gap: 1rem;
        width: 30%;
        .testimonial{
            display: flex;
            flex-direction: column;
          
            align-items: center;
            gap: 1rem;
            .image{
              position: relative;
              .circle1{
                position: absolute;
                border: 0.2rem solid white;
                width: 10rem;
                height: 10rem;
                gap: 2rem;
                border-radius: 50%;
                left: -0.7rem;
                top: -0.7rem;

              }
              .circle2{
                display: flex;
                height: 10rem;
                width: 10rem;
                background-color: #8860e6b0;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
              }
            }  
        }
        .hidden{
          display: none;
        }
        color: white;
        .designation{
          color: var(--secondary-color);
        }
        .discription{
          height: 8rem;
        }
      }
      .controls{
        display: flex;
        gap: 1rem;
        button{
          padding: 0.5rem;
          border-radius: 1rem;
          background-color: var(--secondary-color);
          border: 0.1rem solid transparent;
          cursor: pointer;
          &:hover{
            background-color: red;
          }
        }
        .active{
          background-color: transparent;
          border-color: var(--secondary-color);
        }
      }
    }
    @media screen and (min-width: 280px) and (max-width:1080px){
    .background{
      display: none;
    }
    .container{
      padding: 4rem 0 ;
      .testimonials{
        width: 80%;
        .testmonial{
          .description{
            height: 18rem;
          }
        }
      }
    }
  }
`

export default Testimonial