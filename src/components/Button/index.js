import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function Button({icon, text, action, color = '#779ecb'}) {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, {backgroundColor: color}]}
      onPress={action}>
      {icon && <Image style={styles.icon} source={icon} />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
