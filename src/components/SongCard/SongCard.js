import React from 'react';
import {View, Text, Image} from 'react';
import styles from './SongCard.styles';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageurl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.info_container}>
          <Text>{props.song.artist}</Text>
          <Text style={styles.year}>{props.song.year}</Text>
        </View>
      </View>
    </View>
  );
};

export default SongCard;
