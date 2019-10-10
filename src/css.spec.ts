import * as css from "./css";

describe("css", () => {
  it("should come with css utilities", () => {
    expect(css.appearanceNone).toEqual({
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none"
    });
  });
});
