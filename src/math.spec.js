import { isEven } from "./math";

describe("isEven", () => {
  it("should return true if even is given", () => {
    const result = isEven(2);
    expect(result).toEqual(true);
  });
  it("should return false if odd is given", () => {
    const result = isEven(3);
    expect(result).toEqual(false);
  });
});
