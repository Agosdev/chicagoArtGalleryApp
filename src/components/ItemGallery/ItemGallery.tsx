import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  IconItem,
  ItemContainer,
  SectionContainer,
  Subtitle,
  Title,
} from './ItemGalleryStyles';
import {IArtwork} from '../../interfaces/interfaces';
import {ScreenNames} from '../../enum/screenNames';
import {setArtworkDetail} from '../../redux/reducers/artwork.reducer';
import {setArtworks} from '../../redux/reducers/favorites.reducer';
import {Img} from '../../screens/ArtworkDetail/ArtworkDetailStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IItem {
  item: IArtwork;
}

const ItemGallery = ({item}: IItem) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();
  const artworks = useSelector((state: any) => state.favorites.artworks);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const onPressFavorite = (i: IArtwork) => {
    dispatch(setArtworks(i));
  };

  const onPressDetail = (i: IArtwork) => {
    dispatch(setArtworkDetail(i));
    navigation.navigate(ScreenNames.ArtworkDetail);
  };

  const setNewData = async (key: string, value: IArtwork[]) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`useAsyncStorage set ${key} error:`, error);
    }
  };

  useEffect(() => {
    const artwork = artworks.find((a: IArtwork) => a.id === item.id);
    if (artwork) {
      setIsFavorited(true);
    } else {
      setIsFavorited(false);
    }

    setNewData('artworks', artworks);
  }, [artworks]);

  return (
    <ItemContainer key={item.id}>
      <Title>{item.title}</Title>
      <Subtitle>{item.artist_title}</Subtitle>
      <Subtitle>{item.credit_line}</Subtitle>
      {item.thumbnail && (
        <Img
          resizeMode="cover"
          source={{
            uri: `${item.thumbnail.lqip}`,
          }}
          alt={item.thumbnail.alt_text}
        />
      )}
      <SectionContainer>
        <IconItem
          name={'heart'}
          color={isFavorited ? 'red' : 'black'}
          size={22}
          onPress={() => onPressFavorite(item)}
          isFavoriteBtn={isFavorited ? true : false}
        />
        <IconItem
          name={'arrow-right'}
          size={24}
          onPress={() => onPressDetail(item)}
          color="black"
        />
      </SectionContainer>
    </ItemContainer>
  );
};

export default ItemGallery;
