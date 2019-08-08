import { add } from "./math";

describe("math", () => {
  it("should add 1 + 2", () => {
    expect(add(1, 2)).toBe(3);
  });
});
