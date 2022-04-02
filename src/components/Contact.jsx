import styled from "styled-components"
import Title from "./Title"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"
import { contactAnimations } from "animation"
import emailjs from "emailjs-com";


function Contact() {
  const [element,controls] =useScroll();
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_oi8ob27','template_ubygsad',e.target,'xlBAEOybPySANhhak').then(res=>{
      console.log(res);

    }).catch(err=>console.log(err))
  }
  
  return (
    <Section id="contacts" ref={element}>
      <Title value="Contact"/>
      <motion.div className="contact" 
      variants={contactAnimations} animate={controls}
      transition={{
      delay:0.03,
      type:"tween",
      duration:0.8,
    }}
    >
        <div className="contact__title">
          <p>Stay in touch with us</p>
          <h2>Lets Get In Touch !</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Use from on right to contact us or Just to say hi !</h4>
            <p> I’m  currently looking for new opportunities and challenges, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you! </p>
            {/* <p>loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat soluta quibusdam laudantium rerum </p> */}
            <div>
              <p>
                <strong>Adress :</strong> Thrissur Kerala India
              </p>
              <p>
                <strong>Email :</strong> sreeragmsurendran1997@gmail.com
              </p>
              {/* <p>
                <strong>Adress :</strong> Thrissur Kerala India
              </p> */}
            </div>
          </div>
          <div className="contact__data__form">
            <form onSubmit={sendEmail}>
            <input type="text" placeholder="name" name="name"/>
            <input type="email" placeholder="email" name="user_email"/>
           <textarea type="message" placeholder="message" name="message"></textarea>
           <button>Send Message</button>
           </form>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
const Section= styled.section`
  min-height: 100vh;
  .contact{
    position: relative;
    align-items: center ;
    justify-content: center;
    padding: 6rem 23rem;
    &__title{
      margin-bottom: 3rem;
      p{
        color: var(--primary-color);
        text-transform: uppercase;
        letter-spacing: 0.2rem;
      }
      h2{
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    &__data{
      display: grid;
      grid-template-columns: 1.1fr 1.2fr;
      gap: 4rem;
     

      &__description{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        h4{
          color: var(--primary-color);
          font-size: 1.3rem;
        }
        p{
          letter-spacing: 0.1rem;
          text-align: justify;
        }
        div{
          p{
            strong{
              text-transform: uppercase;
            }
          }
        }
        
      }
      &__form{
          display: flex;
          flex-direction: column;
          align-items: center;
          
          
          gap: 2rem;
          margin-left: 6rem;
          input ,textarea{
              text-transform: uppercase;
              border: none;
              border-bottom: 0.2rem solid var(--secondary-color);
              width: 100%;
              letter-spacing: 0.2rem;
              padding-bottom: 0.7rem;
              &:focus{
                outline: none;
              }
              &::placeholder{
                color: var(--secondary-color);
                letter-spacing: 0.4rem;
              }
          }
          textarea{
            width: 100% !important;
            height: 50%; 
            resize: none;
          }
          button{
            width: 100%;
            background-color: transparent;
            border: 0.2rem solid var(--secondary-color);
            height: 3rem;
            color: var(--secondary-color);
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            &:hover{
              background-color: var(--secondary-color);
              color: var(--primary-color);
            }
          }
        }

    }
  }
  @media screen and (min-width: 280px) and (max-width:1080px){
    .contact{
        margin: 1rem;
        padding: 0 1rem;
        &__title{
          margin: 0;
          text-align: center;
          p{
            font-size: 0.8rem;
          }
          h2{
            font-size: 1.3rem;
          }
        }
        &__data{
          grid-template-columns: 1fr;
          margin: 0;
          p{
            text-align: left;
          }
          &__form{
            button{
              height: 6rem;
            }
          }
        }
    }
  }
`
export default Contact