import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export default function Header() {
  return (
    <HeaderContainer>
      <BackContainer>
        <Text>1</Text>
      </BackContainer>
      <TitleContainer>
        <Text>2</Text>
      </TitleContainer>
      <IconsContainer>
        <Text>3</Text>
      </IconsContainer>
    </HeaderContainer>
  );
}

// Styled Components

HeaderContainer = styled.View`
  background-color: ${(props) => props.theme.colors.tempColor1};
  height: 55px;
  flex-direction: row;
`;

BackContainer = styled.View`
  background-color: ${(props) => props.theme.colors.tempColor2};
`;

TitleContainer = styled.View`
  background-color: ${(props) => props.theme.colors.tempColor3};
  flex: 1;
`;

IconsContainer = styled.View`
  background-color: ${(props) => props.theme.colors.tempColor2};
`;
