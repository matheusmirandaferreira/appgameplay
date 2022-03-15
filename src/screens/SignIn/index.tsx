import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './style';

export function SignIn() {
  const navigation = useNavigation<any>();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        resizeMode="stretch"
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se
          {'\n'}e organize suas
          {'\n'}
          joatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </View>
    </View>
  );
}
