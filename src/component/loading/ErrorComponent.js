import React from 'react';
import { Box , Typography , Button } from "@mui/material";
import sadSun from "../../assets/sad-sun.png"

const ErrorComponent = ({
  fetchData,
  search,
  state
}) => {
 const { error } = state;



  return (
    <Box 
    className ="loading"
    sx ={{textAlign: "center"}}
    >
      <img 
      alt='sad-sun' 
      width={300}
      src ={sadSun} />
        <Typography variant ="h4">
            {error === "Failed to fetch" && "Network Error"}
        </Typography>
        {
          error === "Failed to fetch" &&
            <Button
            sx={{ maxWidth:180}}
            variant ="outlined"
            onClick = {()=> fetchData(state, search)}
            >
            Try Again
            </Button>
        }
    </Box>
  )
}

export default ErrorComponent