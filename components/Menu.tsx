import styled from "@emotion/styled";

const MenuWrapper = styled.menu`
  padding: 30px;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const ClientSearch = styled.input`
  height: 43px;
  width: 500px;
  border-width: 0;
  padding: 13px 36px;
  font-size: 11px;
  letter-spacing: 0.2px;
  border-radius: 21.5px;
  position: relative;
  background-image: url("/ic20-search.svg");
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position: 14px 12px;
  outline: none;
  border: 1px solid transparent;
  &:focus {
    border-color: gray;
  }
`;

const NotificationBadge = styled.div`
  height: 43px;
  width: 43px;
  border-right: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 18px;
    height: 20px;
  }
`;

const UserName = styled.span`
    padding-left: 15px;
    padding-right: 11px;
    font-size: 12px;
`

const Avatar = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
`;

const UserMenu = styled.div`
    display: flex;
    align-items: center;
`

export const Menu = () => {
  return (
    <MenuWrapper>
      <ClientSearch placeholder="Поиск клиента" />
      <UserMenu>
          <NotificationBadge>
              <img src="/notifications.svg" alt="notifications"/>
          </NotificationBadge>
          <UserName>Alexander Gerasimuk</UserName>
          <Avatar src="/avatar.png" alt="avatar"/>
      </UserMenu>
    </MenuWrapper>
  );
};
