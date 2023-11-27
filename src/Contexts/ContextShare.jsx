import React, { createContext, useState } from 'react'
export const addProjectResponseContext = createContext()
export const editProjectResponsContext=createContext()


function ContextShare({children}) {
const [addProjectRespon,setAddProjectResponse]=useState({})
const [editProjectRespons,setEditProjectResponse]=useState({})
  return (
    <>
      
 
 
     <addProjectResponseContext.Provider value={{addProjectRespon,setAddProjectResponse}}>
        <editProjectResponsContext.Provider value={{editProjectRespons,setEditProjectResponse}}>
             {children}
         </editProjectResponsContext.Provider>
     </addProjectResponseContext.Provider>
 
         
    
    
    
    </>
  )
}

export default ContextShare