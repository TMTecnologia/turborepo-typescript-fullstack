import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { Text } from "react-native";

import { CardList } from "~/atomic/organisms";

import { useUsers } from "../../hooks";
import { mockedAvatarUrl } from "../../utils";
import { Container, Pressable } from "./styles";

export const UserList = () => {
  const { users, isLoading, setCache } = useUsers();
  const [counter, setCounter] = useState(0);

  const removeUser = useCallback((targetId) => {
    setCache((old) => old?.filter(({ id }) => id !== targetId) ?? []);
  }, []);

  const addUser = useCallback(() => {
    setCache((old) => [
      ...(old ?? []),
      { email: "test@gmail.com", name: "Teste", id: 80000 + counter },
    ]);
    setCounter((old) => old + 1);
  }, [counter]);

  if (isLoading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Pressable onPress={addUser} />
      <CardList
        data={
          users?.map(({ name, id }) => ({
            title: name,
            image: { uri: mockedAvatarUrl(name) },
            id,
          })) ?? []
        }
        callback={removeUser}
      />
      <StatusBar style="auto" />
    </Container>
  );
};
