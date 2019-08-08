import { join } from "./string";

describe("string", () => {
  it("should join a and b", () => {
    expect(join("a", "b")).toBe("ab");
  });
});
