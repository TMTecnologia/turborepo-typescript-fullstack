import { render } from "@testing-library/react-native";
import React from "react";

import App from "../src";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree: any = render(<App />).toJSON();
    expect(tree?.children?.length).toBe(1);
  });
});
