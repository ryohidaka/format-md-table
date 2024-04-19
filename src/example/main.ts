import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { formatMarkdownTable } from "../";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Format Markdown Table</h1>
    <div class="card">
      <textarea id="inputTextarea" rows="4" cols="50">
|Name|Age|Gender|
|-|-|-|
|Alice|30|Female|
|Bob|25|Male|
|Charlie|40|Male|
|David|35|Male|
      </textarea><br>
      <button id="formatButton" type="button">Format</button><br>
      <textarea id="outputTextarea" rows="5" cols="50"></textarea>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

// Setup textarea and button
const inputTextarea =
  document.querySelector<HTMLTextAreaElement>("#inputTextarea")!;
const outputTextarea =
  document.querySelector<HTMLTextAreaElement>("#outputTextarea")!;
const formatButton =
  document.querySelector<HTMLButtonElement>("#formatButton")!;

// Process when button is clicked
formatButton.addEventListener("click", () => {
  const inputText = inputTextarea.value;
  const formattedText = formatMarkdownTable(inputText);
  outputTextarea.value = formattedText;
});

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
