import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import Animated, {
  Layout,
  SlideInLeft,
  SlideOutRight,
} from "react-native-reanimated";

import { Card, CardProps } from "../../molecules";

type DataProps = CardProps & { id: number };

interface Props {
  data: DataProps[];
  callback: (id: number) => void;
}

const defaultThrottleTimeMs = 16; // 60fps = 16ms

export const CardList = ({ data, callback }: Props) => {
  const { width, height } = useWindowDimensions();
  const mounting = useRef(true);
  const [viewHeight, setViewHeight] = useState(0);

  useEffect(() => {
    mounting.current = false;
  }, []);

  return (
    <Animated.ScrollView
      style={{ width, height }}
      contentContainerStyle={{ paddingBottom: 50, paddingHorizontal: 20 }}
      scrollEventThrottle={defaultThrottleTimeMs}
      onScroll={(event) => {
        const y = event.nativeEvent.contentOffset.y;
        console.log({ event: event.nativeEvent.contentOffset });
        // TODO: log on 80% scroll
        if (viewHeight * 0.8 < y) {
          console.log("fetch new page threshold");
        }
      }}
      onLayout={(event) => {
        setViewHeight(event.nativeEvent.layout.height);
      }}
    >
      {data.map(({ id, image, title }) => (
        <Animated.View
          key={id}
          entering={
            mounting.current ? SlideInLeft.delay(100 * id) : SlideInLeft
          }
          exiting={SlideOutRight.delay(200)}
          layout={Layout.delay(200)}
          style={{ marginBottom: 20 }}
        >
          <TouchableOpacity onPress={() => callback(id)}>
            <Card image={image} title={title} />
          </TouchableOpacity>
        </Animated.View>
      ))}
    </Animated.ScrollView>
  );
};
