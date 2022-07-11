import React from 'react'

const WithStorageListener=(WrappedComponent)=> {
    return function WrappComponentWithStorageListener(props){
        const [storageChange,setStorageChange]= React.useState(false)
           return (
           <WrappedComponent
           show={storageChange}
           toggleShow={setStorageChange}
           />
           )
       }
       }


export  { WithStorageListener };
