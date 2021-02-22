import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux'
import { addLike, removeLike } from '../redux/actions'

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  const like = useSelector(state => state.liked);
  const isExistedLike = like.filter(like => like.id == item.id).length > 0 ? true : false;
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: item.image}} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="arrow-back-circle-outline" size={45} color={colors.darkgray} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('UtubePlayer', { url: item.url })}>
            <FontAwesome name="youtube-play" size={60} color={colors.gray} />
          </TouchableOpacity>
        </View>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.playdateWrapper}>
            <Text size={24} color={colors.white} />
            <Text style={styles.playdateText}>{item.playdate}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          {
            isExistedLike
              ?
              <TouchableOpacity onPress={() => { dispatch(removeLike(item.id)) }}>
                <Entypo name="heart" size={32} color={colors.red} />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => { dispatch(addLike(item)) }}>
                <Entypo name="heart" size={32} color={colors.gray} />
              </TouchableOpacity>
          }
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>MOVIE INFO</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => { Alert.alert('', ' ⚠ 서비스 준비 중입니다.') }}>
          <Text style={styles.buttonText}>티켓 구매</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.63,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 25,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  playdateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  playdateText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.darkGray,
    height: 85,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: colors.orange,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  }
});

export default Details;