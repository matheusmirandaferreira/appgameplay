import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/matheusmirandaferreira.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Ola, <Text style={styles.username}>Matheus</Text>
          </Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
