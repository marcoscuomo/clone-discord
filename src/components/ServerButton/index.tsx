import React from 'react';

import { Button } from './styles';
import logo from '../Images/logo192.png';

export interface IButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<IButtonProps> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}

    >
      {isHome && <img src={logo} alt="Logo" />}
    </Button>
  )
}

export default ServerButton;