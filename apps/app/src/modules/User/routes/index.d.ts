import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { GlobalStackProps } from "@root/global";

export declare type MainStackProps = {
  User: undefined;
};

export type UserProps = NativeStackScreenProps<GlobalStackProps, "User">;
