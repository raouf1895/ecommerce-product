import React, { useState, createContext } from 'react'
const MyCotext = createContext()
const MyProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [added, setAdded] = useState(false)
       
     const  removeFromCart = () =>{
        setAdded(false)
       }
       const addToCart = () =>{
        setAdded(true)
       }

       const plusItem = () =>{
        if(count>= 0){
          setCount(count + 1)
        }}
        const minusItem = () =>{
          if(count>= 1){
            setCount(count - 1)
          }
        }
       
 
    return (
      <>
      <MyCotext.Provider value={{count, added, plusItem, minusItem, addToCart, removeFromCart}}>
        {children}
      </MyCotext.Provider>
      </>
    )
  }
export {MyCotext, MyProvider}

