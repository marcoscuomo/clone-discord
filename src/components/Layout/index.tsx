import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChanelInfo from '../ChannelInfo';
import ChanelList from '../ChanelList';

const Layout: React.FC = () => {
  return (
    <Grid> 
      <ServerList />
      <ServerName />
      <ChanelInfo />
      <ChanelList />
    </Grid>
  );
}

export default Layout;