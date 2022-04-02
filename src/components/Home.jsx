import styled from 'styled-components';
import home from 'assets/home.png'
import Navbar from './Navbar';
import play from 'assets/play.png'
import {motion} from "framer-motion"
import {homeAnimations ,homeInfoAnimations } from "animation"


function Home() {
  return (<Section>
    <Navbar />
    <motion.div className="home"
    variants={homeAnimations}
    transition={{delay:0.3 ,duration:0.6,type:"tween"}}
    >
      <div className="content">
        <div className="title">
          <h1>Hi,&nbsp; &nbsp;My Name is</h1><h1 className='name'>Sreerag</h1>
        </div>
        <div className="subtitle">
          <p>
          <strong> Fullstack developer</strong> 
          <br/>
          <br/>
          I design and code beautifully simple things, and I love what I do.
          I use Javascript,&nbsp; react,&nbsp; python and Node js to create interactive  experiences and products.
          
          </p>
          <p className='about'> Feel free to take a look at my latest works.</p>
        </div>

        <img src={play} alt='playButton' />
      </div>
    </motion.div>
    <motion.div className="info"
    variants={homeInfoAnimations}
    transition={{delay:0.3 ,duration:0.6,type:"tween"}}
    >
      <div className="grid">
        <div className="col">
          <strong>Email</strong>
          <p>sreeragmsurendran1997@gmail.com</p>
        </div>
        <div className="col">
          <strong>Mobile</strong>
          <p>(+91)6238009075</p>
        </div>
        <div className="col">
          <strong>Address</strong>
          <p>Thrissur Kerala India 680724</p>
        </div>
        <div className="col">
          <strong>Services</strong>
          <p>Full Coding</p>
        </div>
        <div className="col">
          <strong>Working Hours</strong>
          <p>Monday to Friday</p>
        </div>


      </div>
    </motion.div>
  </Section>
  )
}
const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

.home{
  height:100%;
  .content{
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: flex-start;
    gap: 1.2rem;
    margin-top: 5rem;
    padding-left: 18rem;
    width: 60%;
    .title{
      .h1{
        font-size: 5rem;
        /* line-height: 5.3rem; */
      }
      .name{
        font-size: 4rem;
      }
    }
    .subtitle{
      p{
        width:90%;
       
      }
      .about{
        font-weight: bolder;
        margin-top: 2rem;
        color: white
      }
    }
  }

}
.info{
  position: absolute;
  bottom: -12rem;
  right: 0;
  background-color: var(--secondary-color);
  padding: 9rem  5rem;
  color: white;
  .grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
}
@media screen and (min-width: 280px) and (max-width:1080px){
  .home{
    .content{
      padding-left:2rem;
      width: 100%;
      margin-bottom: 2rem;
      .title{
        h1{
          font-size: 4rem;
          line-height: 4rem;
        }
      }
    }
  }
  .info{
    position: initial;
    .grid{
      grid-template-columns: 1fr;
    }
  }
}
`
export default Home