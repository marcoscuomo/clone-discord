import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container> 
      <Profile>
        <Avatar />
        <UserData>
          <strong>John Doe</strong>
          <span>#2456</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;