import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';

function App() {
  //const renderSong = ({item}) => <SongCard song={item} />; //render return dısına taşınınca hata veriyor

  const renderSong = ({item}) => <SongCard song={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={music_data}
          renderItem={({item}) => <Text>{item.title}</Text>} // dışarı taşımalı
        />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
