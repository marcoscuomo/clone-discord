import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container> 
      <HashtagIcon />

      <Title>Chat-Free</Title>
      <Separator />
      <Description>Open channel for conversation</Description>

    </Container>
  );
}

export default ChannelInfo;