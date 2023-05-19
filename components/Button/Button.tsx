import React from 'react';
import { Text, Pressable } from 'react-native';

// STYLES
import styles from './styles';

const Button = (props: any): JSX.Element => {
  const { onPress, title = 'Save', variant = 'primary' } = props;

  return (
    <Pressable style={variant == 'primary' ? styles(variant).buttonPrimary : styles(variant).buttonActions} onPress={onPress}>
      <Text style={styles(variant).text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
