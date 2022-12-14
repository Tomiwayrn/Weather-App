import React from 'react';
import { Stack ,LinearProgress, Typography, Box} from "@mui/material";

const Progressbar = ({
    value
}) => {
  return (
    <Box>
      <Stack
      direction
      justifyContent={"space-between"}
      >
        <Typography>
            0
        </Typography>
        <Typography>
            50
        </Typography>
         <Typography>
            100%
        </Typography>
      </Stack>
      <LinearProgress 
      variant='determinate'
      value={value}
      />
      %
   </Box>
  )
}

export default Progressbar