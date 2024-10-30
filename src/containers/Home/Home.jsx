import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import {Animate} from 'react-simple-animate';
import myCv from '../../assests/cv samah layouni.pdf';
function Home() {

const navigate = useNavigate();
console.log(navigate)

const handleNavigateToContactMePage = () =>{
   navigate("/contact")
}

  
  return (
    <section id='home' className='home'>
        <div className='home__text-wrapper'>
          <h1>
            hello, I'm Layouni Samah <br/>
            Economiste, Full-stack developer and graphic designer
          </h1>
         
        </div>
        <Animate
        play
        duration={0.5}
        delay={0.5}
        start={{
          transform : 'translateY(550px)'
        }}
        end={{
          transform : 'translateX(0px)'
        }}
        >
        <div className='home__contact-me'>
            <button onClick={handleNavigateToContactMePage}> Hire Me </button>
        </div>
        </Animate>
        <Animate
        play
        duration={0.5}
        delay={0.5}
        start={{
          transform : 'translateY(550px)'
        }}
        end={{
          transform : 'translateX(0px)'
        }}
        >
        <div className='home__contact-me'>
        <div className='home__contact-me'>
          <a href={myCv} download="Samah_Layouni_CV.pdf">
           <button>Download My CV</button>
            </a>
       </div>
        </div>
        </Animate>

    </section>
  );
}

export default Home;
