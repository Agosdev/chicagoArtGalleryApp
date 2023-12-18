import {Image, Text, View} from 'react-native';
import styled from 'styled-components';

export const Title = styled(Text)`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 5px;
`;

export const Subtitle = styled(Text)`
  margin: 5px;
  font-size: 15px;
  font-weight: bold;
`;

export const Img = styled(Image)`
  width: '100%';
  height: 100px;
  margin: 10px;
  margin-left: 0px;
`;

export const ItemContainer = styled(View)`
  margin: 20px;
  padding: 20px;
  border-radius: 30px;
  background-color: white;
  elevation: 20;
`;
