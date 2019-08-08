import { concat } from "./common";

describe("common", () => {
  it("should concat a with b", () => {
    expect(concat("a", "b")).toBe("ab");
  });
});
