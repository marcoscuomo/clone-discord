import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChanelInfo from '../ChannelInfo';
import ChanelList from '../ChanelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData'

const Layout: React.FC = () => {
  return (
    <Grid> 
      <ServerList />
      <ServerName />
      <ChanelInfo />
      <ChanelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
}

export default Layout;