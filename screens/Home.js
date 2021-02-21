import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Carousel from '../component/Carousel'
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import boxoffice from '../assets/data/boxoffice';
import premovie from '../assets/data/premovie';
import { banner } from '../assets/data/banner';
import { MaterialCommunityIcons, Entypo } from 'react-native-vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

Feather.loadFont();
Entypo.loadFont();

const Home = ({ navigation }) => {
  const renderDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item, })}>
        <ImageBackground source={item.image}
          style={[styles.discoverItem, { marginLeft: item.id === '1' ? 20 : 0 }]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemplaydateWrapper}>
            <Entypo size={18} color={colors.white} />
            <Text style={styles.discoverItemplaydateText}>{item.playdate}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderLearnMoreItem = ({ item }) => {
    return (
      <ImageBackground source={item.image} style={[styles.learnMoreItem, { marginLeft: item.id === '1' ? 20 : 0 }]}
        imageStyle={styles.learnMoreItemImage}>
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={()=>{}}>
            <Feather name="menu" size={30} color={colors.black} />
          </TouchableOpacity>
          <View style={styles.serch}>
            <MaterialCommunityIcons name="magnify" size={26} />
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="microphone" size={26} />
              <MaterialCommunityIcons name="tune" size={26} />
            </View>
          </View>
        </View>
        <View style={styles.discoverWrapper}>
          <View style={{ marginBottom: 15 }}>
            <Carousel data={banner} />
          </View>
          <Text style={styles.learnMoreTitle}>🎬 개봉 예정 영화</Text>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={premovie}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>🎬 박스오피스</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text style={[styles.discoverCategoryText, { color: colors.orange }]}>일별</Text>
            <Text style={styles.discoverCategoryText}>주간/주말</Text>
            <Text style={styles.discoverCategoryText}>월별</Text>
            <Text style={styles.discoverCategoryText}>연도별</Text>
          </View>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={boxoffice}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discoverWrapper: {
    marginTop: 3,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
  discoverItemplaydateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemplaydateText: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.white,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  serch: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 13,
    alignItems: 'center',
    width: 300
  }
});

export default Home;