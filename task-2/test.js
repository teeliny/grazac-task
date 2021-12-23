const findRecurrence = require("./");

describe("Recurrence Character Suite", () => {
  test("Two string length - with recurrence", () => {
    expect(findRecurrence("ff")).toBe("f");
    expect(findRecurrence("zz")).toBe("z");
  });

  test("Two string length - without recurrence", () => {
    expect(findRecurrence("he")).toBe(null);
    expect(findRecurrence("kq")).toBe(null);
  });

  test("Multiple character - without recurrence", () => {
    expect(findRecurrence("abcdef")).toBe(null);
    expect(findRecurrence("abeduiowegad")).toBe(null);
  });

  test("Multiple character - with recurrence", () => {
    expect(findRecurrence("acbbac")).toBe('b');
    expect(findRecurrence("abcdefghiijklmno")).toBe('i');
  });
});