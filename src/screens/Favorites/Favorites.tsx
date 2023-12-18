import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import {RootState} from '../../redux/store';
import {cleanAllArtworks} from '../../redux/reducers/favorites.reducer';
import ListGallery from '../../components/ListGallery/ListGallery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IArtwork} from '../../interfaces/interfaces';
import {ListContainer, Title, RemoveButton} from './FavoritesStyles';

const Favorites = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.favorites.count);
  const artworks = useSelector((state: RootState) => state.favorites.artworks);
  const [data, setData] = useState<IArtwork[]>(artworks);

  useEffect(() => {
    const fetchData = async (key: string) => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (!value) {
          return;
        }
        setData(JSON.parse(value));
      } catch (error) {
        console.error(`useAsyncStorage get ${key} error:`, error);
      }
    };

    fetchData('artworks');
  }, [artworks]);

  return (
    <SafeAreaView>
      <View>
        <Title>{count} FAVORITES</Title>
        {data && (
          <ListContainer>
            <RemoveButton
              title="Remove all favorites"
              onPress={() => dispatch(cleanAllArtworks())}
            />
            <ListGallery items={data} />
          </ListContainer>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
