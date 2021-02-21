
import React, { useState, useCallback } from "react";
import { View, StyleSheet } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Ionicons';

const UtubePlayer = ({ route, navigation }) => {

  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.goBack()}>
        <Entypo name="arrow-back-circle-outline" size={45} color={colors.darkgray} />
      </TouchableOpacity>
      <View  style={styles.video}>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={route.params.url}
          onChangeState={onStateChange}
        />
      </View>
    </View>
  )
};

export const styles = StyleSheet.create({
  container:{
    flex:1
  },
  video: {
    justifyContent: 'center',
    flex: 1
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 25,
  },
});

export default UtubePlayer;