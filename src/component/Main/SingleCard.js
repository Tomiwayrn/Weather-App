import React from 'react';
import { convert , getImage } from '../../functions/utils';
import { Card , Typography, Stack } from "@mui/material";

const SingleCard = ({
  singleDay,
  degree,
  first
}) => {

 
  return (
    <Card
    sx={{
      background: "#1e213a",
      margin: 1,
      padding: 2,
      borderRadius: 0,
     
    }}
  
    >
      <Stack
      gap ={0}
      justifyContent = {"space-between"}
      >

      
      <Typography
      sx={{
        color: "#e4dcdc"
      }}
      variant = {first ? "h5" : ""}
      >
        {
         first ? 
          "Tommorrow" 
          : new Date(singleDay.datetime).toUTCString().replace("00:00:00 GMT", "")
        }
      </Typography>

      <img 
          width ={100}
          style ={{margin: "0 auto"}}
          alt={singleDay.icon} src = {getImage(singleDay.conditions)}/>
     

      <Stack
      direction
      justifyContent={"space-between"}
      >
        <Typography
        sx={{
          color: "#e4dcdc"
        }}
        >
        {
            degree === "celsius" ? 
            singleDay.tempmax
            : convert( singleDay.tempmax)
          }
          <sup>
              {
              degree === "celsius" ? 
              <sub><sup>o</sup>C</sub> 
              : <sub><sup>o</sup>F</sub>
              }
            </sup>
        </Typography>

        <Typography
         sx={{
          color: "#e4dcdc",opacity: .6
        }}
        >
          {
            
            degree === "celsius" ? 
            singleDay.tempmin
            : convert( singleDay.tempmin)
          }
          <sup>
              {
              degree === "celsius" ? 
              <sub><sup>o</sup>C</sub> 
              : <sub><sup>o</sup>F</sub>
              }
            </sup>
        </Typography>

        
      </Stack>
      </Stack>
    </Card>
  )
}

export default SingleCard