import React from 'react';
import Main from './component/Main/Main';
import Leftbar from './component/Leftbar/Leftbar';
import Stack from "@mui/material/Stack";



const App = () => {
  const [degree, setDegree] = React.useState("celsius");
  const [search , setSearch] = React.useState("");
  const [state, setState]  = React.useState({
    content: "",
    status: "loading",
    error: ""
  });


  const  fetchData = async ( ) =>{
   
    try{
      setState({
        ...state,
        status: "loading"
      })
        const location = search ? search : "jos"
       const res  = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=VLFM6VFLQK4GRHYJVPPM86NYK&contentType=json`)
        const data = await res.json() 
       setState (
        {
            ...state,
            content: data,
            status: "success"
        })

        console.log(data)


      
    }

    catch(error){
        setState({
            ...state,
            status: "error"
        })
    }
}



 const [geolocation , setLocation ] = React.useState([])





 
 

 React.useEffect(() => {

 fetchData(state,search, setState)
getLocation()
console.log(geolocation)
 
 }, [search])
 

  return (
    <Stack
        className='app-container'
        sx = {{overflow: "scroll", position: "relative"}}
    >
        <Leftbar 
        degree= {degree}
        state = {state}
        fetchData = {fetchData}
        search ={search}
        setSearch = {setSearch}
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