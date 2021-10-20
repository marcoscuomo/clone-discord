import React from 'react';
import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';


const ChanelList: React.FC = () => {
  return (
    <Container>
        <Category>
          <span>Text channels</span>  
          <AddCategoryIcon />
        </Category>

        <ChannelButton channelName="chat-free" />
        <ChannelButton channelName="work" />
        <ChannelButton channelName="lol" />
        <ChannelButton channelName="csgo" />
        <ChannelButton channelName="valorant" />
    </Container>
  )
}

export default ChanelList;