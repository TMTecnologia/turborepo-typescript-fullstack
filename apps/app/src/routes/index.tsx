import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { HomeRoutes } from "@root/modules/Home";
import { UserRoutes } from "@root/modules/User";

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={HomeRoutes} />
      <Screen name="User" component={UserRoutes} />
    </Navigator>
  );
};
