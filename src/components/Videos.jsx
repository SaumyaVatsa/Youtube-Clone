import { Stack, Box } from '@mui/material';

import {VideoCard, ChannelCard } from './';

const Videos = ({videos, isChannelCard}) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((item,idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} isChannelCard = {isChannelCard}/>}
                {item.id.channelId && <ChannelCard channel={item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos