"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../lib/sum");
test("adds 2 + 2 to equal 4", () => {
    expect((0, sum_1.sum)(2, 2)).toEqual(4);
});
