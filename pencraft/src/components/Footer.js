import React from 'react';
import styled from 'styled-components';

// Styled footer to match the header
const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #0f0c29);
    color: #fff;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const FooterText = styled.p`
    margin: 0;
    position: relative;
    z-index: 10;
`;

const FooterLink = styled.a`
    color: #5599ff;  // Bright blue for contrast against the dark background
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #99ccff;  // Lighter shade of blue on hover
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                Explore the universe of content. Visit our <FooterLink href="/">homepage</FooterLink> for more information.
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;
