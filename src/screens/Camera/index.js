import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Camera = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RNCamera 
      style={styles.preview}
      />
    </View>
  );
};

export default Camera;
    