import React from 'react';
import { ScrollView, View } from 'react-native';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

import { styles } from './styles';

type Props = {
  categorySelected: number;
  setCategory(categoryId: number): void;
};

export function CategorySelect({ categorySelected, setCategory }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
