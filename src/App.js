import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { motion } from 'framer-motion'
const App = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    const [text, setText] = useState('Welcome')
    const [cursorVariant, setCursorVariant] = useState("default")

    console.log(mousePosition)


    useEffect(() => {
        const mouseMove = e => {
           setMousePosition({
            x: e.clientX,
            y: e.clientY
           })
        }
        console.log('inside')
        window.addEventListener("mousemove", mouseMove)
        return () => {
            window.removeEventListener("mousemove", mouseMove)
            console.log('outside | clear')
        }
    }, [])

const variants = {
    default: {
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
        backgroundColor: 'dark'
    },
    text: {
        x: mousePosition.x - 65,
        y: mousePosition.y - 65,
        backgroundColor: 'lightsalmon',
        height: 150,
        width: 150,
        mixBlendMode: "difference",
       
    }
}

const textEnter = () =>  {
    setCursorVariant("text") 
    setText('illyach')
}
const textLeave = () => setCursorVariant("default")



  return (
    <div className='App'>
        <h1 
        onMouseEnter={textEnter} 
        onMouseLeave={textLeave}
        className='title'>{text}</h1>
        

       
        <motion.div  
        className='cursor'
        variants = {variants}
        animate={cursorVariant}
        />
    </div>
  )
}

export default App
