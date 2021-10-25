import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChanelInfo from '../ChannelInfo';
import ChanelList from '../ChanelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';

const Layout: React.FC = () => {
  return (
    <Grid> 
      <ServerList />
      <ServerName />
      <ChanelInfo />
      <ChanelList />
      <UserInfo />
      <div />
      <UserList />
    </Grid>
  );
}

export default Layout;