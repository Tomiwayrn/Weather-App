import React from 'react';
import sunImage from "../../assets/vector-sun-icon.png";
import { Typography , Box } from "@mui/material"

const Loading = () => {
  return (
    <Box
    sx = {{
        textAlign: "center"
    }}
    className ="loading"
    >
        <img
        style =
        {{ 
        marginBottom: "2rem"
        }}
        width= {200}
        src = {sunImage} alt= "sune" className= "loading-img"/>
        <Typography
        variant = "h5"
        className = "loading-text"
        >Loading...</Typography>

    </Box>
  )
}

export default Loading