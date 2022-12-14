import React from 'react';
import { convert } from '../../functions/utils';
import { Box , Stack, Typography } from "@mui/material";
import { LocationOnTwoTone } from '@mui/icons-material';
import  bg from "../../assets/Cloud-background.png";
import { getImage } from "../../functions/utils"


const MainCard = ({
  content,
  degree
}) => {

  const currentDay = content.days[0]

 


  return (
    <Box
    className = "main-card"
    >
      <img className = "bg" alt ="bg" src = {bg}/>
      <Stack
      sx={{
        textAlign: "center"
      }}
      gap={2.5}
      >
          <img 
          width ={200}
          style ={{margin: "0 auto"}}
          alt={currentDay.icon} src = {getImage(currentDay.conditions)}/>
          <Typography 
          variant = "h2"
          component = "h4">
            { degree === "celsius" ? 
            currentDay.temp
            : convert( currentDay.temp)
          } <sup>
              {
              degree === "celsius" ? 
              <sub><sup>o</sup>C</sub> 
              : <sub><sup>o</sup>F</sub>
              }
            </sup>
          </Typography>

          <Typography
          variant = "h5"
          >
            {currentDay.conditions}
          </Typography>

          <Typography>
            Today
          </Typography>

          <Typography>
            {<LocationOnTwoTone/>} {content.resolvedAddress}
          </Typography>
      </Stack>
    </Box>
  )
}

export default MainCard