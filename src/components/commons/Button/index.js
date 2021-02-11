import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
        color: ${ props => get(props.theme, `colors.${props.variant}.color`)};
        background: transparent;
    `;

const ButtonDefault = css`
        color: ${ props => get(props.theme, `colors.${props.variant}.contrastText`)};
        background-color: ${ props => get(props.theme, `colors.${props.variant}.color`)};
    `;

export const Button = styled.button`
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: opacity ${({ theme }) => theme.transition};
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    &:hover,
    &:focus{
        opacity: .5;
    }
    ${ props => props.ghost ? ButtonGhost : ButtonDefault }
`;