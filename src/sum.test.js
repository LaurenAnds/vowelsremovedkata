import { removeVowels } from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("remove vowels from string ", () => {
    expect(removeVowels("Kenny")).toBe("Knny");
});

test("remove vowels from string", () => {
    expect(removeVowels("Lauren")).toBe("Lrn");
});

test("remove vowels from string", () => {
    expect(removeVowels("")).toBe("");
});

test("remove vowels from string", () => {
    expect(removeVowels("NEILL")).toBe("NLL");
});

test("remove vowels from string", () => {
    expect(removeVowels("Exaggerate")).toBe("xggrt");
});

test("remove vowels from string", () => {
    expect(removeVowels("i like steak")).toBe(" lk stk");
});