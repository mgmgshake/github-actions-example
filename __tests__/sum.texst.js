const sum = require("../sum");

// 足し算が成功すること
test("add 1 + 2 to equal 3", () => {
	expect(sum(1,2)).toBe(3);
})
