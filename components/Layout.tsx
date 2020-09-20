import styled from '@emotion/styled'

export const Layout = styled.div`
    display: grid;
    background-color: rgb(237, 240, 245);
    min-width: 100vw;
    min-height: 100vh;
    grid-template-columns: 210px 1230px;
    grid-template-rows: 103px 1fr;
    grid-template-areas:
        'aside menu'
        'aside schedule'
`