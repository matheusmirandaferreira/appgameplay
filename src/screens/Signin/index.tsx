import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './style';

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        resizeMode="stretch"
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize
          {'\n'}
          suas joatinas
          {'\n'}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Text>
        <ButtonIcon activeOpacity={0.7} title="Entrar com Discord" />
      </View>
    </View>
  );
}