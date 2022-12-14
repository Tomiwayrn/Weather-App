import React from 'react';
import Main from './component/Main/Main';
import Leftbar from './component/Leftbar/Leftbar';
import Stack from "@mui/material/Stack";


const App = () => {
  const [degree, setDegree] = React.useState("celsius");
  const [search , setSearch] = React.useState("");
  const [geolocation , setLocation ] = React.useState('')
  const [state, setState]  = React.useState({
    content: "",
    status: "loading",
    error: ""
  });


  React.useEffect(()=>{
    const  getLocation = async ()=> {
      try {
        const res = await fetch ("https://ipapi.co/json")
        const data = await res.json()
        setLocation(data.region)
        setSearch(data.region)
      
      }
        
    
      catch(error) {
       console.log(error.message)
      }}
     getLocation()
    
        
  }, [])
  
   
  




  const  fetchData = async ( ) =>{
   
    try{
      setState({
        ...state,
        status: "loading"
      })
        const location = geolocation ? geolocation : "jos"
       const res  = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search ? search : location}?unitGroup=metric&key=VLFM6VFLQK4GRHYJVPPM86NYK&contentType=json`)
        const data = await res.json() 
       setState (
        {
            ...state,
            content: data,
            error: "",
            status: "success"
        })
        console.log(data)
    }

    catch(error){
      
        setState({
            ...state,
            status: "error",
            error: error.message
        })
    }
}


 React.useEffect(() => {

 fetchData(state,search, setState, geolocation)

 // eslint-disable-next-line
 }, [search]);


 
  return (
    <Stack
        className='app-container'
        sx = {{
           position: "relative"}}
    >
        <Leftbar 
        degree= {degree}
        state = {state}
        fetchData = {fetchData}
        search ={search}
        setSearch = {setSearch}
        setLocation = {setLocation}
        />
        <Main 
        degree ={degree}
        setDegree = {setDegree}
        state = {state}
        fetchData = {fetchData}
        search ={search}
        />
    </Stack>
  )
}

export default App