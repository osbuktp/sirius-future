import styled from '@emotion/styled'
import {css} from '@emotion/core'

const NavList = styled.ul`
    list-style: none;
    padding: 27px 0 0 0;
    font-size: 12.5px;
    letter-spacing: 0.2px;
    margin: 0;
`

const activeLink = css`
    border-left-color: var(--color-accent-blue);
    background-color: var(--color-primary-hover);
    color: black;
`

interface NavItemProps {
    active: boolean
}

const NavItem = styled.li`
    padding-left: 27px;
    padding-right: 30px;
    height: 45px;
    display: flex;
    align-items: center;
    line-height: 20px;
    border-left: 3px solid transparent;
    color: var(--color-text-inactive);
    ${(props: NavItemProps) => props.active && activeLink};
    img {
        margin-right: 10px;
        margin-top: 1px;
        height: 16px;
        width: 16px;
    }
`

const navItems = [
    {
        id: 0,
        name: 'Занятия',
        imgSrc: '/ic24-calendar-select-day.svg'
    },
    {
        id: 1,
        name: 'Учащиеся',
        imgSrc: '/ic24-user.svg'
    },
    {
        id: 2,
        name: 'Тренеры',
        imgSrc: '/ic24-book.svg'
    },
    {
        id: 3,
        name: 'Финансы',
        imgSrc: '/ic24-ruble.svg'
    },
    {
        id: 4,
        name: 'Абонементы',
        imgSrc: '/ic24-ticket.svg'
    },
    {
        id: 5,
        name: 'Доступ в CRM',
        imgSrc: '/ic24-flag.svg'
    },
    {
        id: 6,
        name: 'Рассылки',
        imgSrc: '/ic20-email.svg'
    },
    {
        id: 7,
        name: 'Отчеты',
        imgSrc: '/ic24-chart-bar.svg'
    },
    {
        id: 8,
        name: 'Настройки',
        imgSrc: '/ic24-settings.svg'
    },
]

export function Navigation() {
    return <NavList>
        {navItems.map(item => <NavItem active={item.id === 2} key={item.id}>
            <img src={item.imgSrc} alt={item.name}/>
            {item.name}
        </NavItem>)}
    </NavList>
}