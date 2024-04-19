import { describe, expect, test } from "vitest";
import { formatMarkdownTable } from "../src";

describe("formatMarkdownTable function", () => {
  test("should return an empty string when empty markdown string is provided", () => {
    const result = formatMarkdownTable("");
    expect(result).toEqual("");
  });

  test("should return an empty string when heasing string is provided", () => {
    const result = formatMarkdownTable("# heading1");
    expect(result).toEqual("# heading1");
  });

  test("should format markdown table correctly", () => {
    const markdownString =
      "\n|Header 1|Header 2|\n| --- | --- |\n|Cell 1|Cell 2|\n";
    const expected = `
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`;
    const result = formatMarkdownTable(markdownString);
    expect(result).toEqual(expected);
  });
});
