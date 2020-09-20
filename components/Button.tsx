import styled from '@emotion/styled'
import {css} from '@emotion/core'

const PrimaryButton = css`
    background-color: white;
    color: black;
`

const InactiveButton = css`
    background-color: transparent;
    border-color: gray;
`

const RoundButton = css`
    border-radius: 21.5px;
`

const AlternateButton = css`
    background-color: green;
    color: white;
`

interface ButtonProps {
    round?: boolean
    variant?: 'primary' | 'alternate' | 'inactive'
}

export const Button = styled.div`
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 4px;
    text-align: center;
    padding: 15px;
    cursor: pointer;
    font-size: 13px;
    line-height: 13px;
    &:not(:first-child) {
        margin-left: 10px;
    }
    ${(props: ButtonProps) => props.round && RoundButton};
    ${(props: ButtonProps) => props.variant === 'primary' && PrimaryButton};
    ${(props: ButtonProps) => props.variant === 'alternate' && AlternateButton};
    ${(props: ButtonProps) => props.variant === 'inactive' && InactiveButton};
`