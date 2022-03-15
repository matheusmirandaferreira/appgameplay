import React, { useState } from 'react';
import { View } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState<number>();

  const handleCategorySelect = (categoryId: number) => {
    categoryId === category ? setCategory(undefined) : setCategory(categoryId);
  };

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          categorySelected={category ?? 0}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}></View>
      </View>
    </View>
  );
}
