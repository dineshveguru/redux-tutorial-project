import { apiCallBegan } from "../api";
import { bugAdd } from "../bugs";

describe("bugSlice", () => {
  describe("action creators", () => {
    it("addBug", () => {
      const bug = { description: "a" };
      const result = bugAdd(bug);
      const expected = {
        type: apiCallBegan.type,
        payload: {
          url: "/bugs",
          method: "post",
          data: bug,
          onSuccess: "bugs/bugAdded",
        },
      };
      expect(result).toEqual(expected);
    });
  });
});
