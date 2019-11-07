import { Box } from "./Box";

describe("Box", () => {
  it("should be a react component with box-sizing", () => {
    expect(Box.style.Style.getStyles()).toContain("{box-sizing:border-box}");
  });
});
