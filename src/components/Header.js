import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from '@expo/vector-icons';

export default function Header() {
  return (
    <HeaderContainer>
      <IconBack>
        <AntDesign name='arrowleft' size={24} color='#FFF' />
      </IconBack>

      <Title>Medicine Details</Title>

      <Icons>
        <MaterialCommunityIcons
          name='brightness-percent'
          size={24}
          color='#FFF'
        />
      </Icons>

      <Icons>
        <Ionicons name='search-sharp' size={24} color='#FFF' />
      </Icons>

      <Icons>
        <FontAwesome name='cart-plus' size={24} color='#FFF' />
      </Icons>
    </HeaderContainer>
  );
}

// Styled Components

HeaderContainer = styled.View`
  height: 55px;
  flex-direction: row;
  padding: ${(props) => props.theme.spaces.lg};
  background-color: ${(props) => props.theme.colors.primary};
`;

IconBack = styled.View`
  flex-direction: row;
  align-items: center;
`;

Title = styled.Text`
  flex: 1;
  font-family: ${(props) => props.theme.fonts.primaryBold};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.white};
  margin-left: ${(props) => props.theme.spaces.lg};
`;

Icons = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${(props) => props.theme.spaces.md};
`;
