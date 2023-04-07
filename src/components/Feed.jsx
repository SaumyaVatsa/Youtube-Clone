import { useState, useEffect } from "react";
import {Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from "../utils/fetchFromAPI";
import  {SideBar, Videos }  from './';

const Feed = () => {
  const [selectedButton, setSelectedButton] = useState('New');
  const [videos, setVideos] =  useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedButton}`).then((data)=> setVideos(data.items))
  }, [selectedButton]);

  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
      <Box sx={{height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2}}}>
        <SideBar selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>

        <Typography className="copyright" variant="body2" sx={{mt:1.5, color: '#fff'}}>
          Copyright 2023 SV Media
        </Typography>
      </Box>

      <Box p={2} sx={{OverflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedButton} <span style={{color: '#fc1503'}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed