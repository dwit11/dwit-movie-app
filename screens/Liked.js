import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { removeLike } from '../redux/actions'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Liked = ({ navigation }) => {
  const liked = useSelector(state => state.liked)
  const dispatch = useDispatch();

  return (
    <ScrollView>
      {
        liked.length ?
          liked.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, marginHorizontal: 12, overflow: "hidden" }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item, })} >
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardplaydate}>{item.playdate}</Text>
                    <Text style={styles.cardDescription}>{item.description}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ margin: 5 }}>
                  <TouchableOpacity onPress={() => { dispatch(removeLike(item.id)) }} style={{ padding: 10 }}>
                    <MaterialCommunityIcons name='trash-can' size={40} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )) :
          <View style={{ alignItems: 'center', marginTop: 300 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>좋아요가 없습니다.</Text>
          </View>
      }
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width / 1.1,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 0,
    height: height / 7,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },

  cardplaydate: {
    fontSize: 11.5,
    color: "#777",
    marginLeft: 10,
  },

  cardDescription: {
    fontSize: 12,
    marginVertical: 8,
    marginLeft: 10,
  },

  cardImage: {
    flex: 0.3,
  }
});

export default Liked;