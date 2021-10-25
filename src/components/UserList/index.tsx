import React from 'react';

import { Container, Role, User, Avatar } from './styles';

type UserPropsType = {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserPropsType> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
        <strong>{nickname}</strong>

        {isBot && <span>Bot</span>}
      </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container> 
      <Role>Available - 1</Role>
      <UserRow nickname="Kevin Cuomo" />
      
      <Role>Offline - 21</Role>
      <UserRow nickname="Albert Strol" isBot />
      <UserRow nickname="John Smith" />
      <UserRow nickname="Jones Williams" />
      <UserRow nickname="Taylor Davies" />
      <UserRow nickname="Wilson Brown" />
      <UserRow nickname="Evans Thomas" />
      <UserRow nickname="Johnson Davies" isBot/>
      <UserRow nickname="Roberts Williams" />
      <UserRow nickname="Taylor Walker" />
      <UserRow nickname="John Wright" />
      <UserRow nickname="John Smith" />
      <UserRow nickname="Jones Williams" isBot />
      <UserRow nickname="Taylor Davies" />
      <UserRow nickname="Wilson Brown" />
    </Container>
  );
}

export default UserList;