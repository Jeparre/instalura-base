import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


export const TextStyleVariantsMap = {
    paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    `,

    smallestException: css`
        font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
        line-height: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    `,
}

const TextBase = styled.span`
    ${ props => TextStyleVariantsMap[props.variant] }
`;

export default function Text({ tag, variant, children }){
    return (
        <TextBase
            as = {tag}
            variant = {variant}
        >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}