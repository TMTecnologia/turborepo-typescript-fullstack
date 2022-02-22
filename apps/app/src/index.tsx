import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useColorScheme } from "react-native";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components/native";

import { themeSelector } from "./global";
import { Routes } from "./routes";
import { queryClient } from "./utils";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeSelector[colorScheme ?? "dark"]}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

// Storybook: to  run comment out file and uncomment this line
// export { default } from "./storybook";
