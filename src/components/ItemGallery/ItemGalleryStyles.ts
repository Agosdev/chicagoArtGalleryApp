import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components';

export const Title = styled(Text)`
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

export const Subtitle = styled(Text)`
  margin: 5px;
  font-size: 15px;
  font-weight: bold;
`;

export const SectionContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemContainer = styled(View)`
  margin: 20px;
  padding: 20px;
  border-radius: 30px;
  background-color: white;
  elevation: 20;
`;

export const IconItem = styled(Icon)<{isFavoriteBtn: boolean}>`
  margin-top: 10px;
  border-width: 2px;
  border-radius: 50px;
  border-color: ${({isFavoriteBtn}) => (isFavoriteBtn ? 'red' : 'black')};
  padding: 10px 10px 5px 12px;
`;
