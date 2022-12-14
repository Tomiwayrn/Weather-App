import React from 'react';
import { Box , Typography , Button } from "@mui/material";
import sadSun from "../../assets/sad-sun.png"

const ErrorComponent = ({
  fetchData,
  search,
  state
}) => {


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
            {state.status === "error" && "Oops an Error Occured"}
        </Typography>
        {
           state.status === "error" &&
            <Button
            maxWidth = {180}
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