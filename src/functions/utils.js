import shower from "../assets/Shower.png";
import snow from "../assets/Snow.png";
import hail from "../assets/Hail.png";
import Thunder from "../assets/Thunderstorm.png";
import LightRain from "../assets/LightRain.png";
import HeavyRain from "../assets/HeavyRain.png";
import Clear from "../assets/Clear.png";
import HeavyCloud from "../assets/Shower.png";
import LightCloud from "../assets/Shower.png";




export const convert = (celsius)=> {
        return ((celsius * 9/5 ) + 32).toFixed(1)
}

export const  getLocation = async ()=> {
  try {
    const res = await fetch ("https://ipapi.co/json")
    const data = await res.json()
    return {
      lat: data.latitude, long: data.longitude
    }
   
  }

  catch(error) {
   console.log(error.message)
  }
 }

export const getImage =(description)=>{

    if(description.includes("shower")){
    return shower
    }

    if (description.includes("snow")){
    return snow
  }

    if(description.includes("hail")){
    return hail
  }
    

    if(description.includes("Thunderstorm")){      
      return Thunder
    
  }

    if(description.includes("light rain")){
  return LightRain
}
    

    if(description.includes("heavy rain")){
  return HeavyRain
}
    

    if(description.includes("Overcast")){
   return HeavyCloud
  }
    

    if(description.includes("Partially cloudy")){
    return LightCloud
    
  }
    

    else {
      return Clear
}
}
  
 















