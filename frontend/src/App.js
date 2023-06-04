import React, { useEffect } from 'react'


const App = () => {
  const time = () => setTimeout(() => {
    console.log("hi");
  }, 10000) 
  
  const r = () => {
    alert("")
  }

  useEffect(() => {
    r();
  }, [time()])


  return (
    <div>
      App
    </div>
  )
}

export default App
