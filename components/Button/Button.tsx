import React from 'react';
import { Text, Pressable } from 'react-native';

// STYLES
import styles from './styles';

const Button = (props: any): JSX.Element => {
  const { onPress, title = 'Save' } = props;

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
