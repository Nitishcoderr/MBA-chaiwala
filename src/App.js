import './styles/App.scss'
import './styles/Intro.scss'
import './styles/Section.scss'
import './styles/Footer.scss'
import './styles/Misc.scss'
import './styles/MediaQuery.scss'

import IntroVideo from './Components/IntroVideo';
import Section from './Components/Section';
import freshTopicImage from './assets/asset 0.png'
import freshTopic2Image from './assets/asset 1.png'
import tedTalkimg from './assets/asset 2.gif'
import franImg from './assets/asset 3.gif'
import mapImg from './assets/asset 4.png'
import courseImg from './assets/asset 5.png'
import albumImg from './assets/asset 6.gif'
import baratImg from './assets/asset 7.png'
import chaiImg from './assets/asset 8.png'
import data from './Data/data.json'

import Footer from './Components/Footer';
import Misc from './Components/Misc'
import { useEffect } from 'react'

const yellow = "#fff100", pink = "#ed1e79",white = "#fff", brown = "#6d3d0f"

function App() {

  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala} = data;

  const dotCursor = (e) =>{
      const cursor = document.querySelector(".cursor")
      cursor.style.top=`${e.pageY - 14}px`
      cursor.style.left=`${e.pageX - 14}px`

      const element = e.target;

      if(element.getAttribute("data-cursorpointer")){
          cursor.classList.add("cursorHover")
        }
        else if(element.getAttribute("data-cursorpointermini")){
        cursor.classList.add("cursorHoverMini")
 
      }
      else{
        cursor.classList.remove("cursorHover")
        cursor.classList.remove("cursorHoverMini")
      }
  }

  useEffect(() => {
    window.addEventListener("mousemove",dotCursor)
    return () =>{
      window.removeEventListener("mousemove",dotCursor)
    }
  }, [])
  

  return (
    <>
      <IntroVideo />
      <Section h3={freshTopic.heading} text={freshTopic.text} btnText={freshTopic.btn} imgSrc={freshTopicImage} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={yellow} btnColor={pink} />
      {/* 2nd section */}
      <Section h3={freshTopic2.heading} text={freshTopic2.text} btnText={freshTopic2.btn} imgSrc={freshTopic2Image} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={yellow} btnColor={pink} />
      {/* ted talk */}
      <Section h3={tedTalks.heading} text={tedTalks.text} btnText={tedTalks.btn} imgSrc={tedTalkimg} backgroundColor={yellow} headingColor={pink} textColor={pink} btnBgColor={pink} btnColor={yellow} />
      {/* franchise */}
      <Section h3={franchise.heading} text={franchise.text} btnText={franchise.btn} imgSrc={franImg} backgroundColor={white} headingColor={pink} textColor={brown} btnBgColor={brown} btnColor={yellow} />
      {/* map */}
      <Section h3={map.heading} text={map.text} imgSrc={mapImg} backgroundColor={pink} headingColor={yellow} hasBtn={false} textColor={yellow} />
      {/* courses */}
      <Section h3={courses.heading} text={courses.text} btnText={courses.btn} imgSrc={courseImg} imgSize={'35%'} backgroundColor={yellow} headingColor={pink} textColor={pink} btnBgColor={pink} btnColor={yellow} />
      {/* album */}
      <Section h3={album.heading} text={album.text} btnText={album.btn} imgSrc={albumImg} backgroundColor={white} headingColor={pink} textColor={brown} btnBgColor={brown} btnColor={yellow} />
      {/* barat */}
      <Section h3={barat.heading} text={barat.text} btnText={barat.btn} imgSrc={baratImg} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={yellow} btnColor={pink} />
      {/* chaiwala */}
      <Section h3={chaiwala.heading} text={chaiwala.text} btnText={chaiwala.btn} imgSrc={chaiImg} backgroundColor={white} headingColor={pink} textColor={brown} btnBgColor={brown} btnColor={yellow} />

      <Footer/>

      <Misc />


    </>
  );
}

export default App;
