// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";

// SOURCE: https://stackoverflow.com/questions/66652403/jest-config-is-throwing-type-errorhandler-error-mixed-isfatal-boolean

beforeAll(() => {
  // SOURCE: https://stackoverflow.com/questions/50793885/referenceerror-you-are-trying-to-import-a-file-after-the-jest-environment-has#50793993
  jest.useFakeTimers();
});

// SOURCE: https://stackoverflow.com/questions/59587799/how-to-resolve-animated-usenativedriver-is-not-supported-because-the-native#59593847
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  Reanimated.default.call = () => null;

  Reanimated.useSharedValue = jest.fn;
  Reanimated.useAnimatedStyle = jest.fn;
  return Reanimated;
});

jest.mock("react-native-gesture-handler", () =>
  jest.requireActual("react-native-gesture-handler/jestSetup")
);

// jest.mock("@react-native-async-storage/async-storage", () =>
//   require("@react-native-async-storage/async-storage/jest/async-storage-mock")
// );

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
  useRoute: () => ({
    params: {
      publicToken: "testToken",
    },
  }),
}));

// SOURCE: https://github.com/th3rdwave/react-native-safe-area-context#testing
jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);
