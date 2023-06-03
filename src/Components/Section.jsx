// import { color } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'

const Section = ({h3,text,hasBtn=true,btnText,imgSrc,imgSize='60%',backgroundColor,headingColor,textColor,btnBgColor,btnColor}) => {

  const headingOptions = {
    initial:{y:"-100%",opacity:0},
    whileInView:{y:0,opacity:1},
  }
  const textOption ={
    ...headingOptions,
    transition:{deley:0.3},
  }
  const buttonOption ={
    initial:{y:"100%",opacity:0},
    whileInView:{y:0,opacity:1},
    transition:{deley:0.3},
    ease:"easeIn"
  }
  const imgOption ={
    initial:{scale:0.1,opacity:0},
    whileInView:{scale:1,opacity:1},
    transition:{deley:0.3}
  }

  return (
    <section className='section' style={{backgroundColor:backgroundColor}}>
        <div>
            <motion.h3 style={{color:headingColor}} data-cursorpointer={true} {...headingOptions}>{h3}</motion.h3>

            <motion.p style={{color:textColor}} data-cursorpointer={true} {...textOption}>{text}</motion.p>

            {hasBtn && <motion.button style={{color:btnColor,backgroundColor:btnBgColor}} data-cursorpointer={true} {...buttonOption}>{btnText}</motion.button>}

            <motion.div {...imgOption}>
                <img src={imgSrc} style={{width:imgSize}}  alt="" />
            </motion.div>

        </div>

    </section>
  )
}

export default Section
