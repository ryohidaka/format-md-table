# format-md-table

[![npm version](https://badge.fury.io/js/format-md-table.svg)](https://badge.fury.io/js/format-md-table)
![build](https://github.com/ryohidaka/format-md-table/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/ryohidaka/format-md-table/graph/badge.svg?token=iCoiq9yTt3)](https://codecov.io/gh/ryohidaka/format-md-table)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B6TVH92)

## Overview

Library to format only table elements in Markdown.

## Notes

## Installation

You can install this library using npm:

```shell
npm install format-md-table
```

## Usage

```ts
import { formatMarkdownTable } from "format-md-table";

const markdownString = `
|Name|Age|Gender|
|-|-|-|
|Alice|30|Female|
|Bob|25|Male|
|Charlie|40|Male|
|David|35|Male|
`;

const formattedMarkdown = formatMarkdownTable(markdownString);
console.log(formattedMarkdown);
```

## API

`formatMarkdownTable(markdownString: string = ""): string`
Formats the markdown tables within the given markdown string.

`markdownString` (optional): The markdown string to format. If not provided, an empty string is used.
Returns the formatted markdown string.

## Example

### Input:

```
|Name|Age|Gender|
|-|-|-|
|Alice|30|Female|
|Bob|25|Male|
|Charlie|40|Male|
|David|35|Male|
```

### Output:

```
| Name    | Age | Gender |
| ------- | --- | ------ |
| Alice   | 30  | Female |
| Bob     | 25  | Male   |
| Charlie | 40  | Male   |
| David   | 35  | Male   |
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
