import { sum } from "../lib/sum";

test("adds 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toEqual(4);
});