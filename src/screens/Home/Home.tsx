import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Subtitle, Title, ListContainer} from './HomeStyles';
import {
  queryParams,
  useGetArtworkByIdQuery,
} from '../../services/getArtwork.services';
import ListGallery from '../../components/ListGallery/ListGallery';
import {IArtwork} from '../../interfaces/interfaces';
import Animated, {FadeIn} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const [items, setItems] = useState<IArtwork[]>([]);
  const [totalRecords, setTotalRecords] = useState<number | undefined>(0);

  const [params, _setParams] = useState<queryParams>({
    id: '',
  });

  const {id} = params;

  const {data: artworks, isLoading, error} = useGetArtworkByIdQuery({id});

  const getResponse = () => {
    if (artworks?.data) {
      setItems(artworks.data);
      setTotalRecords(artworks.data.length);
    }
  };

  useEffect(() => {
    getResponse();
  }, [artworks]);

  return (
    <SafeAreaView>
      <LinearGradient colors={['#d8d8d8', '#a999b3', '#acafdc']}>
        <View>
          <Title>CHICAGO ART GALLERY</Title>
          <Subtitle>{totalRecords} results:</Subtitle>
          {!isLoading && !error && items ? (
            <ListContainer>
              <ListGallery items={items} />
            </ListContainer>
          ) : (
            <Subtitle>LOADING RESULTS:</Subtitle>
          )}
          {error && <Subtitle>ERROR. Please, try again later.</Subtitle>}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
