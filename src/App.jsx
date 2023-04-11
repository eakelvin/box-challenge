import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import boxes from './boxes'
import Box from './Box'


function App() {
  const [box, setBox] = useState(boxes)

    function toggle(id) {
        setBox(prevState => {
          return prevState.map((item) => {
            return item.id === id ? {...item, on: !item.on} : item
          })
        })
    }

  const boxElements = box.map(item => (
    <Box 
      key={item.id}
      id={item.id} 
      on={item.on} 
      toggle={toggle}
      />
  ))
  

  return (
    <main>
        {boxElements}
    </main>
)

}

export default App
