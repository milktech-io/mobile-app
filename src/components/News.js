import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(width / 1.6);
const ITEM_HORIZONTAL_MARGIN = 30;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
const SLIDER_WIDTH = width;

DUMMY_DATA = [
  {
    title: 'test 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu cursus leo. Vivamus tempor convallis sapien, accumsan semper odio fermentum quis. Pellentesque sit amet sapien tellus.',
  },
  {
    title: 'test 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu cursus leo. ',
  },
  {
    title: 'test 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
];

const News = () => {
  const navigation = useNavigation();

  function navigate() {
    // navigation.navigate('ViewNews');
  }

  function renderFunction(item, index) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        key={index + item}
        onPress={navigate}
        activeOpacity={0.8}>
        <Image
          //   source={{uri: item?.image?.replace('http://', 'https://')}}
          style={styles.image}
        />
        <View style={styles.des}>
          <Text style={[{fontSize: 18, color: 'white', marginBottom: 5}]}>
            {item.title}
          </Text>
          <Text style={{color: 'white'}} numberOfLines={3}>
            {item.body}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.titleHeader]}>News</Text>
      {/* {getNewsLoading && <ActivityIndicator color={'rgba(35, 42, 47, 0.6)'} />}
      {getNewsError && <Text>Error cargando noticias</Text>} */}
      <Carousel
        layout="default"
        layoutCardOffset={1}
        data={DUMMY_DATA}
        renderItem={({item, index}) => renderFunction(item, index)}
        horizontal={true}
        scrollEnabled={true}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideOpacity={0.8}
      />
      {/* {getNewsData.length > 0 ? (
        <Carousel
          layout="default"
          layoutCardOffset={1}
          data={getNewsData}
          renderItem={({item, index}) => renderFunction(item, index)}
          horizontal={true}
          scrollEnabled={true}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideOpacity={1}
        />
      ) : (
        <Text
          style={{
            textAlign: 'center',
            marginTop: 50,
            color: 'rgba(35, 42, 47, 0.6)',
          }}>
          Sin noticias
        </Text>
      )} */}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
  itemContainer: {
    height: '100%',
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#282532',
    borderRadius: 20,
    padding: 15,
    flex: 1,
  },
  image: {
    backgroundColor: 'white',
    flex: 1.5,
    borderRadius: 10,
  },
  des: {
    flex: 1,
    justifyContent: 'center',
  },
  titleHeader: {
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 15,
    fontWeight: '600',
    marginTop: 30,
  },
});
