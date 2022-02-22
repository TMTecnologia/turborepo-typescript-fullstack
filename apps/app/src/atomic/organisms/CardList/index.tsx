import React from "react";
import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";

import { Card, CardProps } from "../../molecules";

type DataProps = CardProps & { id: number };

interface Props {
  data: DataProps[];
  callback: (id: number) => void;
}

const { width } = Dimensions.get("window");

export const CardList = ({ data, callback }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ image, title }) => `${image}${title}`}
      renderItem={({ item: { image, title, id }, index }) => (
        <Animated.View
          key={id}
          entering={SlideInLeft.delay(100 * index)}
          exiting={SlideOutRight.delay(200)}
        >
          <TouchableOpacity onPress={() => callback(id)}>
            <Card image={image} title={title} />
          </TouchableOpacity>
        </Animated.View>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      contentContainerStyle={{ width, paddingVertical: 50 }}
    />
  );
};
