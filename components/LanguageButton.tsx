import React, { createContext, useContext } from 'react'
import {Switch, cn} from "@nextui-org/react";
import { useLanguageContext } from '@/pages/_app';



function LanguageButton() {
  const { languageStat, setLanguageStat } = useLanguageContext();

    return (
      <div className="flex absolute bottom-0 right-5 m-0 gap-5">
        <div className="flex flex-col gap-2 z-50 items-center">
          <Switch isSelected={languageStat} onValueChange={setLanguageStat}>
            Language
          </Switch>  
          <p className="text-accent">Language: {languageStat ? "English" : "Japanese"}</p>
        </div>
       
        <Switch
      classNames={{
        base: cn(
          "z-50 inline-flex flex-row-reverse w-full max-w-md bg-red-100 hover:bg-blue-200 items-center",
          "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
        wrapper: "p-0 h-4 overflow-visible",
        thumb: cn("w-6 h-6 border-2 shadow-lg",
          "group-data-[hover=true]:border-primary",
          //selected
          "group-data-[selected=true]:ml-6",
          // pressed
          "group-data-[pressed=true]:w-7",
          "group-data-[selected]:group-data-[pressed]:ml-4",
        ),
      }}
    >
      <div className="flex flex-col gap-1 bg-blue-600">
        <p className="text-medium">Language</p>
      </div>
    </Switch>
      </div>

    )  
}


export default LanguageButton