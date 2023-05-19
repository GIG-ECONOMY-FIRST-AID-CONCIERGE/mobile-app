import React from 'react';
import { Text, Pressable } from 'react-native';

// STYLES
import styles from './styles';

const colors: any = {
  'confirm': '#1369E8',
  'cancel': '#F3485A',
  'primary': '#FFFFFF'
}

const Button = (props: any): JSX.Element => {
  const { onPress, title = 'Save', variant = 'primary' } = props;

  return (
    <Pressable style={variant == 'primary' ? styles.buttonPrimary : styles.buttonActions} onPress={onPress}>
      <Text style={[styles.text, { color: colors[variant] }]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
