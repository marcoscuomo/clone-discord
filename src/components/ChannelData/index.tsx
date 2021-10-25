import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return (
    <Container> 
      <Messages ref={messageRef}>
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage 
          author="Mark Smith" 
          date="2021/12/08" 
          content={
            <>
              <Mention>@Paul Tell </Mention>, Load me on LoL again please ?
            </>
          }
        />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage 
          author="Mark Smith" 
          date="2021/12/08" 
          content={
            <>
              <Mention>@Paul Tell </Mention>, Load me on LoL again please ?
            </>
          }
        />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage 
          author="Mark Smith" 
          date="2021/12/08" 
          content={
            <>
              <Mention>@Paul Tell </Mention>, Load me on LoL again please ?
            </>
          }
        />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage author="Kevin Will" date="2021/12/10" content="Our game is starting" />
        <ChannelMessage 
          author="Mark Smith" 
          date="2021/12/08" 
          content={
            <>
              <Mention>@Paul Tell </Mention>, Load me on LoL again please ?
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Talk in #chat-free" />
        <InputIcon />  
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;