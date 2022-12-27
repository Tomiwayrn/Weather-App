import React from 'react';
import Loading from "../loading/Loading"
import Box from "@mui/material/Box";
import {  Stack } from '@mui/material';
import ErrorComponent from '../loading/ErrorComponent';
import MainSection from './MainSection';



const Main = ({
    degree,
    setDegree,
    state,
    fetchData,
    search
}) => {


    const { status , content } = state;
  return (
    <Box
    padding = {4}
    flex ={4}
    sx={{
        minHeight: "612px",
    position: "relative",
    overflowX: "hidden",
    textAlign: "center"}}
    >
    <Stack 
    
    sx={{justifyContent: "end", flexDirection: "row"}}
    gap={2}>


        <button
        style={{
            background: degree === "celsius" ? "#e7e7eb" : "#585676",
            color: degree === "celsius" ? "black" : "white",
            boxShadow: "0px 0px 20px black"
        }}

        onClick ={()=>{
            setDegree("celsius")
        }}
        className = "temp-btn"
        ><sup>o</sup>C</button>

        <button
          style={{
            background: degree === "fareinheit" ? "#e7e7eb" : "#585676",
            color: degree === "fareinheit" ? "black" : "white"
        }}
        
        onClick ={()=>{
            setDegree("fareinheit")
        }}
         className = "temp-btn"
        ><sup>o</sup>F</button>
    </Stack>

    {
        status === "loading" && <Loading />
    }

    {
        status === "success" && 
       <MainSection 
       content = {content}
       degree= {degree}/>
       
    }

    {
          status === "error" && 
          <ErrorComponent
          fetchData = {fetchData}
          state = {state}
          search = {search}
          />
          }
        
        <footer >
            Created by <a target ="blank" href='mailto:afolabiquavious@gmail.com'>Tomiwa</a> Devchallenges.io
        </footer>
    
    </Box>
  )
}

export default Main