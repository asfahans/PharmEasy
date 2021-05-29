import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Test = () => {
  return (
    <TestContainer>
      <TextHeading>
        This is a testThis is a testThis is a testThis is a testThis is a
        testThis is a testThis is a testThis is a testThis is a testThis is a
        testThis is a testThis is a testThis is a testThis is a testThis is a
        test
      </TextHeading>
    </TestContainer>
  );
};

export default Test;

TestContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
`;

TextHeading = styled.Text`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  background-color: ${(props) => props.theme.colors.primaryMedium};
  margin: ${(props) => props.theme.spaces.sm};
  padding: ${(props) => props.theme.spaces.xl};
`;
