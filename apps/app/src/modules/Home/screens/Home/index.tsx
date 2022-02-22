import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";

import { icons } from "~/assets";
import { Card } from "~/atomic/molecules";
import type { HomeProps } from "~/modules/Home";

import { Container, Text } from "./styles";

export const Home = ({ navigation }: HomeProps) => {
  function handlePress() {
    navigation.navigate("User");
  }

  return (
    <Container>
      <TouchableOpacity onPress={handlePress}>
        <Card image={icons.icon} title="Home" />
      </TouchableOpacity>
      <Text>Change Default Device Color to See Magic</Text>
      <StatusBar style="auto" />
    </Container>
  );
};
