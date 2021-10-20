import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  background-color: transparent;
  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    font-size: 15px;
    color: var(--senary);
    margin-left: 5px;
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white)
    }
  } 
`;

export const HashtagIcon = styled.div``;

export const InviteIcon = styled.div``;

export const SettingIcon = styled.div``;