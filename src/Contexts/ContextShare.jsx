import React, { createContext, useState } from 'react'
export const addProjectResponseContext = createContext()


function ContextShare({children}) {
const [addProjectRespon,setAddProjectResponse]=useState({})
  return (
    <>
      
     <addProjectResponseContext.Provider value={{addProjectRespon,setAddProjectResponse}}>
         {children}
     </addProjectResponseContext.Provider>
    
    
    </>
  )
}

export default ContextShare