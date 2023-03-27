
import {collection, getDocs} from 'firebase/firestore'
import { database } from '../firebase'
import { cityType } from '../interface'

const getCiti = async() =>{
        const cityCollection = collection(database,'citi')
        const cities = await getDocs(cityCollection)
    
        const cityList: cityType[] = [];
    
        cities.forEach((city) =>{
            cityList.push({
                code: city.data().code,
                name:city.data().name,
                person:city.data().person,
                square:city.data().square
            })
        })
        return cityList;
    }    

export default getCiti