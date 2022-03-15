import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

type Props = {
  urlImage: string;
  title: string;
  subtitle: string;
};

export function GameListItem({ subtitle, title, urlImage }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: urlImage }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
