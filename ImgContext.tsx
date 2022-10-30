import {createContext, useState} from "react";

const ImgContext = createContext();

export function ImgProvider ({children}) {
return (
  <ImgContext.Provider value = {{item:3}}>
    {children}
  </ImgContext.Provider>
)

}

export default ImgContext;

