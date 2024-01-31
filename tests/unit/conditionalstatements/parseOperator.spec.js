import { parseOperator } from "../../../src/Helpers/form/checkConditionalLogic";

describe("test parseOperator", () => {
  describe('"is" operator works', () => {
    test("bool", () => {
      // it should not modify the value for single value fields
      expect(parseOperator(true, "is", true)).toBe(true);
      expect(parseOperator(true, "is", false)).toBe(false);
    });
    test("string", () => {
      // it should not modify the value
      expect(parseOperator("foo", "is", "foo")).toBe(true);
      expect(parseOperator("bar", "is", "foo")).toBe(false);
    });

    test("float", () => {
      // it should not modify the value
      expect(parseOperator(69.42, "is", 69.42)).toBe(true);
      expect(parseOperator(69.42, "is", 1.1)).toBe(false);
    });

    test("interger", () => {
      // it should not modify the value
      expect(parseOperator(1, "is", 1)).toBe(true);
      expect(parseOperator(1, "is", 2)).toBe(false);
    });
  });

  describe('"isnot" operator works', () => {
    test("bool", () => {
      // it should not modify the value for single value fields
      expect(parseOperator(true, "isnot", true)).toBe(false);
      expect(parseOperator(true, "isnot", false)).toBe(true);
    });
    test("string", () => {
      // it should not modify the value
      expect(parseOperator("foo", "isnot", "foo")).toBe(false);
      expect(parseOperator("bar", "isnot", "foo")).toBe(true);
    });

    test("float", () => {
      // it should not modify the value
      expect(parseOperator(69.42, "isnot", 69.42)).toBe(false);
      expect(parseOperator(69.42, "isnot", 1.1)).toBe(true);
    });

    test("interger", () => {
      // it should not modify the value
      expect(parseOperator(1, "isnot", 1)).toBe(false);
      expect(parseOperator(1, "isnot", 2)).toBe(true);
    });
  });

  describe('"<" operator works', () => {
    test("float", () => {
      // 69.42 smaller than 1 so it should be false
      expect(parseOperator(69.42, "<", 1.0)).toBe(false);

      // 1.0 is smaller than 69.2 so it should be true
      expect(parseOperator(1.0, "<", 69.2)).toBe(true);
    });

    test("interger", () => {
      // 10 is smaller than 2 so it should be true
      expect(parseOperator(10, "<", 2)).toBe(false);

      // 1 is smaller than 4 so it should be true
      expect(parseOperator(1, "<", 4)).toBe(true);
    });
  });

  describe('">" operator works', () => {
    test("float", () => {
      // 69.42 is bigger than 1.0 so it should be true
      expect(parseOperator(69.42, ">", 1.0)).toBe(true);
      expect(parseOperator(1.0, ">", 69.2)).toBe(false);
    });

    test("interger", () => {
      // 10 is bigger than 2 so it should be true
      expect(parseOperator(10, ">", 2)).toBe(true);
      expect(parseOperator(1, ">", 4)).toBe(false);
    });
  });

  describe('"contains" operator works', () => {
    test("string", () => {
      // it should not modify the value
      expect(parseOperator("XXXXXXXfooXXXX", "contains", "foo")).toBe(true);
      expect(parseOperator("XXXXXX", "contains", "foo")).toBe(false);
    });
  });

  describe('"starts_with" operator works', () => {
    test("string", () => {
      // it should not modify the value
      expect(parseOperator("fooXXXXXXXXXXX", "starts_with", "foo")).toBe(true);
      expect(parseOperator("XXXfooXXX", "starts_with", "foo")).toBe(false);
      expect(parseOperator("XXXXXXfoo", "starts_with", "foo")).toBe(false);
      expect(parseOperator("XXXXXXXXX", "starts_with", "foo")).toBe(false);
    });
  });

  describe('"ends_with" operator works', () => {
    test("string", () => {
      // it should not modify the value
      expect(parseOperator("XXXXXXXfoo", "ends_with", "foo")).toBe(true);
      expect(parseOperator("XXXfooXXX", "ends_with", "foo")).toBe(false);
      expect(parseOperator("fooXXXXXX", "ends_with", "foo")).toBe(false);
      expect(parseOperator("XXXXXXXXX", "ends_with", "foo")).toBe(false);
    });
  });
});
