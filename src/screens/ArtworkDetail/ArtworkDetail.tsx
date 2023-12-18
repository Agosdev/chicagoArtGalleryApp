import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Img, ItemContainer, Subtitle, Title} from './ArtworkDetailStyles';
import {RootState} from '../../redux/store';
import HTMLView from 'react-native-htmlview';

const ArtworkDetail = () => {
  const artwork = useSelector((state: RootState) => state.artwork.artwork);

  return (
    <SafeAreaView>
      <View>
        <Title>ARTWORK DETAIL</Title>
        {artwork && (
          <ItemContainer>
            <Title>{artwork.title}</Title>
            <Subtitle>{artwork.artist_title}</Subtitle>
            <Subtitle>{artwork.gallery_title}</Subtitle>
            <Subtitle>{artwork.credit_line}</Subtitle>
            {artwork.description && <HTMLView value={artwork.description} />}
            {artwork.thumbnail.lqip && (
              <Img
                resizeMode="cover"
                source={{
                  uri: `${artwork.thumbnail.lqip}`,
                }}
                alt={artwork.thumbnail.alt_text}
              />
            )}
          </ItemContainer>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ArtworkDetail;
