import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {SectionContainer, Subtitle} from './ListGalleryStyles';
import ItemGallery from '../ItemGallery/ItemGallery';
import {IArtwork} from '../../interfaces/interfaces';

interface IArtworkList {
  items: IArtwork[];
}

const ListGallery = ({items}: IArtworkList) => {
 
  const renderItem = useCallback(({item}) => <ItemGallery item={item} />, []);

  return (
    <View>
      {items && items.length > 0 ? (
        <FlatList data={items} renderItem={renderItem} />
      ) : (
        <SectionContainer>
          <Subtitle>There aren't any artworks to show yet...</Subtitle>
        </SectionContainer>
      )}
    </View>
  );
};

export default ListGallery;
