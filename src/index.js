import { useEffect, useState } from "react";
import { Routes } from "./routes";
import { ContextData } from "./context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

  const [data, setData] = useState('');

  async function getData(){
      const response = await AsyncStorage.getItem("@vyzus_whats_movie_data");
      if(response){
          const returnJsonValue = JSON.parse(response);
          if(returnJsonValue.length !== 0){
              setData(returnJsonValue);
          }
      }
  }

  useEffect(()=>{
    getData();
  }, [])

  return (
    <ContextData.Provider value={{data, setData}}>
      <Routes />
    </ContextData.Provider>
  )
}