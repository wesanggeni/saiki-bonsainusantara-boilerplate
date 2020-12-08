import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import CustomStatusBar from '../../components/statusbar';
import styles from '../../components/styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.postItem}>
    <Text style={styles.postTitle}>{title}</Text>
  </View>
);

const Screen = ({navigation}) => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

    return (
      <SafeAreaView style={styles.screen}>
        <CustomStatusBar/>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default Screen;
