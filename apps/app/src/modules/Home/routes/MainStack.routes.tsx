import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="HomePage" component={Home} />
    </Navigator>
  );
};
