import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { GlobalStackProps } from "~/global";

export declare type MainStackProps = {
  Home: undefined;
};

export type HomeProps = NativeStackScreenProps<GlobalStackProps, "Home">;
