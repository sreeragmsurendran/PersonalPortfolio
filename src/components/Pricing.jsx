import styled from "styled-components"
import Title from "./Title"
import price1 from "assets/pricing1.png"
import price2 from "assets/pricing2.png"
import play from "assets/play.png"
import { Fragment } from "react"
import {pricingAnimations } from "animation"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"



function Pricing() {
  const [element,controls] =useScroll();
  const plans = [
    {
      name: "Basic",
      price: 9,
    },
    {
      name: "Pro",
      price: 29,
    },
    {
      name: "Expert",
      price: 49,
    }
  ];

  const data = [
    { value: "25 users per Project ", type: "Basic" },
    { value: "100 Project ", type: "Basic" },
    { value: "Cloud Storage", type: "Basic" },
    { value: "50 Ticket support", type: "Basic" },
    { value: "Online support ", type: "Pro" },
    { value: "Daily Backup ", type: "Pro" },
    { value: "Priority assistance ", type: "Expert" },
  ]
  return (
    <Section ref={element}>
      <Title value="Pricing" />
      <div className="background">
        <img src={price1} alt="price1" className="bg1" />
        <img src={price2} alt="price2" className="bg2" />
      </div>
      <div className="pricing__title">
        <p>Find your pricing plan</p>
        <h2>For prety stories  for which there is a  good evidence</h2>
      </div>
      <div className="pricing">
        {plans.map(({ name, price }, index) => {
          return(
          <motion.div className="pricing__plan" key={index}
          variants={pricingAnimations} animate={controls}
          transition={{
            delay:0.03,
            type:"tween",
            duration:0.8,
            }}
          >
            <div className="pricing__plan__name">
              <h2>{name}</h2>
              <div className="pricing__plan__name__price">
                <span>$</span>
                <p>{price}</p>
              </div>
            </div>
            <div className="pricing__plan__content">
              <ul className={`pricing__plan__content__feature ${name}`}>
                {data.map(({ value, type }, index2) => {
                  return (
                    <Fragment key={index2}>
                      {
                        name === "Basic" ? (
                          type === name ? (
                          <li>{value}</li>
                          ) : (
                          <li className="line">{value}</li>
                          )
                        ) : name === "Pro" ? (
                          type === "Basic" || type === name ? (
                          <li>{value}</li>
                          ) : (
                          <li className="line">{value}</li>
                          )
                        ) : (
                          name === "Expert" && <li>{value}</li>
                          )
}
                    </Fragment>
                  )
                }
                )}
              </ul>
              <div className="pricing__plan__content__action">
                <span>Order Now</span>
                <img src={play} alt="order now" />
              </div>
            </div>
          </motion.div>
          )
        }
        )}
      </div>


    </Section>
  )
}
const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  .background{
    .bg1{
      position: absolute;
      top: -60%;
      left: -5%;
      z-index: -1;
    }
    .bg2{
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
  }
  .pricing__title{
     margin: 6rem 10rem;
     p{
       color: var(--secondary-color);
       text-transform: uppercase;
       letter-spacing: 0.2rem;
     }
     h2{
       color: var(--primary-color);
       font-size: 2rem;
     }
  }
  .pricing{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 0 10rem;
    &__plan{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      &:nth-child(2){
        .pricing__plan__content{
          padding: 0 5rem;
          border-left: 0.2rem solid var(--primary-color);
          border-right: 0.2rem solid var(--primary-color);
        }
      }

      &__name{
        background-color: var(--primary-color);
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        &__price{
         display: flex;
         position: relative;
          color: white;
          span{
            position: absolute;
            top: 1rem;
            left:-1rem;
            font-size:1.7rem;
          }
          p{
            font-size: 4rem;
            font-weight: bold;
          }

        }
      }
      &__content{
        &__feature{
          color: var(--primary-color);
          list-style-type: none;
          gap:0.6rem;
          display: flex;
          flex-direction: column;
          text-align: center;
          margin-bottom: 2rem;
          .line{
            text-decoration: line-through;
          }
        }
        
        &__action{
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-transform: uppercase;
        }

      }
    }
  }
  @media screen and (min-width: 280px) and (max-width:1080px){
    padding: 1rem;
    background-color: var(--secondary-color);
    .pricing__title{
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2{
        font-size: 1.3rem;
      }

    }
    .background{
      display: none;
    }
    .pricing{
      grid-template-columns: 1fr;
      padding: 1rem;
      gap: 4rem;

      &__plan{
        display: flex;
        flex-direction:column ;
        align-items: center;
        gap: 2rem;
        
        &__name{
          height: 10rem;
          width: 10rem;
          h2{
            font-size: 1.5rem;
          }
          &__price{
            p{
              font-size: 3rem;
            }
          }
        }
        &:nth-child(2){
          .pricing__plan__content{
            padding: 0;
            border: none;
          }
          
        }
      }
    }
  }
  
`
export default Pricing