import type { MainStackProps as HomeStackProps } from "~/modules/Home";
import type { MainStackProps as UserStackProps } from "~/modules/User";

export type GlobalStackProps = HomeStackProps & UserStackProps;
