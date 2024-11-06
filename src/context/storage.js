import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

export async function handleAsyncStorage(values, setData){

    const result = values;

    const existObj = await AsyncStorage.getItem("@vyzus_whats_movie_data");

    let objects = existObj ? JSON.parse(existObj) : [];
    
    const found = objects.find(item => result.id === item.id);

    if(found !== undefined){
            objects.map((item, index) => {
                if(item.id === values.id){
                    objects.splice(index, 1);
                    ToastAndroid.show('Apagado da lista!', ToastAndroid.SHORT);
                }
            })
    }else{
        objects.unshift(result);
        ToastAndroid.show('Salvo na lista!', ToastAndroid.SHORT);
    }

    setData(objects);

    await AsyncStorage.setItem("@vyzus_whats_movie_data", JSON.stringify(objects));
}