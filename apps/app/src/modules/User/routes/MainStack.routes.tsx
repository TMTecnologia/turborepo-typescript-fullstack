import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { UserList } from "../screens/UserList";

const { Navigator, Screen } = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Navigator>
      <Screen name="UserList" component={UserList} />
    </Navigator>
  );
};
