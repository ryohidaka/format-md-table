import { formatMarkdownTable } from "../";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
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
