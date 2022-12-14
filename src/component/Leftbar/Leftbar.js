import React from 'react';
import Box from "@mui/material/Box";
import  LocationOnTwoTone from '@mui/icons-material/LocationOnTwoTone';
import  Close  from '@mui/icons-material/Close';
import  Stack from '@mui/material/Stack';
import Search from './Search';
import Loading from '../loading/Loading';
import ErrorComponent from '../loading/ErrorComponent';
import MainCard from './MainCard';

const Leftbar = ({
    search, 
    setSearch, 
    state, 
    degree,
    fetchData,
    setLocation
}) => {

    const {status , content , error} = state;
    const [searchModal, setSearchModal] = React.useState(false);
 
    
  
  return (
    <Box
    flex = {2}
    sx={{ 
     
      background: "#1e213a",
     position: "relative"}}
    >
       <Stack 
       direction
       padding={3}
       marginBottom= {2}
       alignItems = {"center"}
       justifyContent = {searchModal?  "end" : "space-between"}
       height = {60}
       
       >
        {
          !searchModal &&      
      
        <p className="search-places">
            Search for places
        </p>
        }
        <button
        className = "temp-btn"
        style ={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          background: !searchModal ? "#6e707a" : "",
          boxShadow: !searchModal ? "0px 0px 10px black" : ""
        }}
        onClick={()=>{
            setSearchModal(prev => !prev)
        }}
        >
            {searchModal? <Close sx={{color: "white"}}/> : <LocationOnTwoTone sx={{color: "white"}}/>}
        </button>
        
      </Stack> 

       {
        searchModal && 
        <Search
        search = {search}
        setSearchModal ={setSearchModal}
        setSearch = {setSearch}
        setLocation = {setLocation}
        />
       }

       {
        status === "loading" & !searchModal && <Loading />
        }

       {
        status === "success" & !searchModal && 
        <MainCard 
        degree = {degree}
        content = {content} />
       } 
        {
          !searchModal & status === "error" &&  
          <ErrorComponent
          fetchData = {fetchData}
          state = {state}
          search = {search}
          />
          }
    </Box>
  )
}

export default Leftbar