import React from 'react';
import {  Stack, Box, Typography, Card } from '@mui/material';
import SingleCard from './SingleCard';
import Progressbar from '../progressbar/Progressbar';


const MainSection = ({
    content,
    degree
}) => {
    const style = {
        background: "#1e213a",
        margin: 1,
        padding: 4,
        borderRadius: 0
      }
  return (
    <Box>

    <Box
    className ="cards-container"
    >
        {
        content.days.slice(0,5).map((item, index)=>{
        return (
            <SingleCard
            first = {index === 0 ? true : false}
            degree = {degree}
            key = {index}
            singleDay = { item }
            />
        )
    })
    }
    
    </Box>
        <Typography
        sx={{
            color: "#e4dcdc",
            textAlign: "left",
            m :2
        }}
        variant = "h5"
        >
            Today's Highlights
        </Typography>

        <Box className="cardInfo-container">
            <Card sx={style}>
                <Stack
                gap={1}
                >
                    <Typography
                        variant = "h6"
                        >
                            Wind Status
                    </Typography>

                    <Typography
                    variant = {"h3"}
                    >
                        {content.days[0].windspeed}
                        <span>
                            <Typography variant ="h5">
                            mph
                        </Typography>
                        </span>
                    </Typography>
                </Stack>
                
            </Card>

            <Card sx={style}>
            <Stack
            gap={1}
                >
                    <Typography 
            variant = "h6"
           >
                    Humidity
                </Typography>

                <Typography variant = "h3">
                    {content.days[0].humidity}%
                </Typography>

                <Progressbar 
                value = {content.days[0].humidity}
                />

            </Stack>
            
            </Card>

            <Card sx={style}>
            <Stack
            gap={1}
                >
            <Typography 
            variant = "h6"
           >
                  Visibility
                </Typography>

                <Typography
                variant= "h3"
                >
                    {content.days[0].visibility}, <sup><Typography variant = "h5">miles</Typography></sup>
                </Typography>    
            </Stack>
           
            </Card>


            <Card sx={style}>
            <Stack
            gap={1}
                >
                    <Typography 
            variant = "h6"
           >
                   Air Pressure
                </Typography>

                <Typography
                variant= "h3"
                >
                    {content.days[0].pressure}, <sup><Typography variant = "h5">mb</Typography></sup>
                </Typography>

            </Stack>
            

            </Card>

        </Box>
    </Box>
  )
}

export default MainSection