import React, { createContext, useContext } from 'react'
import {Switch, cn} from "@nextui-org/react";
import { useLanguageContext } from '@/pages/_app';



function LanguageButton() {
  
  //言語State
  const { languageStat, setLanguageStat } = useLanguageContext();
  const switchWidth = '200px'

  const containerStyle = {
    width: switchWidth, // コンテナの幅を設定
  };

    return (
      <div className="flex absolute bottom-5 right-5">
        <div className="flex relative z-50 items-center w-[180px]">
          <div style={containerStyle}>
          <Switch
        classNames={{
          base: cn(
            "relative inline-flex z-50 flex max-w-md w-[180px] bg-gray-700 hover:bg-gray-500 ",
            "cursor-pointer rounded-lg gap-2 p-4 border-2 border-pink-700",
            "data-[selected=true]:border-blue-700 justify-center items-center pl-6",
          ),
          wrapper: "p-0 h-4 overflow-visible flex",
          thumb: cn("w-6 h-6 border-2 shadow-lg",
            "group-data-[hover=true]:border-blue-700",
            //selected
            "group-data-[selected=true]:ml-6",
            // pressed
            "group-data-[pressed=true]:w-7",
            "group-data-[selected]:group-data-[pressed]:ml-4",
          ),
          thumbIcon: 'bg-blue-700',
          label: "w-[180px]",
        }}
        isSelected={languageStat} onValueChange={setLanguageStat}
        size='lg'
        >
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-medium text-accent">{languageStat ? "English" : "日本語"}</p>
        </div>
        </Switch>
        </div>
      </div>
       
      </div>

    )  
}


export default LanguageButton