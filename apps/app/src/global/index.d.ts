import type { MainStackProps as HomeStackProps } from "@root/modules/Home";
import type { MainStackProps as UserStackProps } from "@root/modules/User";

export type GlobalStackProps = HomeStackProps & UserStackProps;
