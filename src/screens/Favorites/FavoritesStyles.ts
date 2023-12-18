import {Button, Text, View} from 'react-native';
import styled from 'styled-components';

export const Title = styled(Text)`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 5px;
`;

export const ListContainer = styled(View)`
  height: 93%;
`;

export const RemoveButton = styled(Button)`
  background-color: red;
`;
