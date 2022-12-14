import React from 'react';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import  KeyboardArrowRightSharp from "@mui/icons-material/KeyboardArrowRightSharp";

const Search = ({
    setSearchModal,
    search,
    setSearch,
    setLocation
}) => {
    const [prevSearch , setPrevSearch] = React.useState('')

        React.useEffect(()=>{
            setPrevSearch(
                localStorage.getItem("previous")? 
                JSON.parse(localStorage.getItem("previous"))
                :[]
            )
        }, [])

    const handleClick = (e) =>{
        
       !prevSearch.includes(search) && setPrevSearch([
        search,
        ...prevSearch
       
       ])
        localStorage.setItem("previous" , JSON.stringify(prevSearch))
        search && setSearchModal(false)
    }


    
  return (
    <Box
    padding = {2}
    className = "search-container"
    >
        <Stack
         direction
         justifyContent={"space-between"}
       
         >
            <InputBase
            placeholder= {"Search places"}
           value = {search}
           onChange ={(e)=>  
            {
             setSearch(e.target.value)
            setLocation("")
        }
        
        }
           className = "search-input"
            sx={{
                width: "80%",
                color: "white"
            }}
            />
            <Button 
            sx={{
                textTransform: "capitalize" 
            }}
            variant = {"contained"}
            onClick ={()=>{
               handleClick()
            }}
            >
                Search
            </Button>
        </Stack>

        <Stack
        gap ={3}
        marginTop = {3}
        >
            {
                prevSearch && 
                prevSearch.slice(0, 5).map((item)=>{
                    return(
                        <Button
                        sx ={{
                            color: "white",
                            padding: 1.5,
                            justifyContent: "space-between"
                        }}
                        endIcon ={<KeyboardArrowRightSharp />}
                        variant ={
                            search === item ?
                            "contained" : 
                            "outlined"}
                        value = { item }
                        onClick={(e)=> setSearch(e.target.value)}
                        >
                            {item}
                        </Button>
                    )
                })
            }
        </Stack>
    </Box>
  )
}

export default Search