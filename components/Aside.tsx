import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import {Navigation} from './Navigation'

const Logo = styled.img`
  width: 120px;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 130px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const AsideWrapper = styled.aside`
    grid-area: aside;
    background-color: white;
`

export function Aside() {
  return (
    <AsideWrapper>
        <LogoWrapper>
            <Logo src='/logo.svg' />
        </LogoWrapper>
        <Navigation />
    </AsideWrapper>
  );
}
