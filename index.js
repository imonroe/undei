export function hideForbiddenWords(enableHover = true) {
  const forbiddenWords = [
    "diversity",
    "diverse",
    "diversified",
    "diversifying",
    "equity",
    "equitable",
    "equitably",
    "inclusion",
    "inclusive",
    "inclusivity",
    "accessibility",
    "accessible",
    "ally",
    "allyship",
    "belonging",
    "belong",
    "culture",
    "cultural",
    "disparity",
    "disparities",
    "equality",
    "identity",
    "identities",
    "intersectionality",
    "intersectional",
    "multicultural",
    "multiculturalism",
    "representation",
    "represent",
    "underrepresented",
    "unconscious bias",
    "implicit bias",
    "bias",
    "affirmative action",
    "antiracism",
    "antiracist",
    "civil rights",
    "discrimination",
    "discriminatory",
    "fairness",
    "justice",
    "social justice",
    "marginalization",
    "marginalized",
    "oppression",
    "oppressed",
    "privilege",
    "systemic",
    "systemic inequality",
    "tokenism"
  ];

  const regex = new RegExp(`\\b(${forbiddenWords.join("|")})\\b`, "gi");
  let changesMade = 0;

  function processTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const parent = node.parentNode;
      if (parent && parent.tagName !== "SCRIPT" && parent.tagName !== "STYLE") {
        const newContent = node.nodeValue.replace(regex, (matched) => {
          changesMade++;
          const span = document.createElement("span");
          span.textContent = matched;
          span.classList.add("hidden-word");
          return span.outerHTML;
        });

        if (newContent !== node.nodeValue) {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = newContent;
          while (tempDiv.firstChild) {
            parent.insertBefore(tempDiv.firstChild, node);
          }
          parent.removeChild(node);
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.childNodes).forEach(processTextNodes);
    }
  }

  processTextNodes(document.body);
  console.log(`Un-DEI script completed. ${changesMade} modifications made.`);

  // Add global CSS for hover effect if enabled
  if (enableHover) {
    document.head.insertAdjacentHTML(
      "beforeend",
      `
            <style>
                .hidden-word {
                    color: black;
                    background-color: black;
                    transition: color 0.2s ease;
                }
                .hidden-word:hover {
                    color: white;
                }
            </style>
        `
    );
  } else {
    document.head.insertAdjacentHTML(
      "beforeend",
      `
            <style>
                .hidden-word {
                    color: black;
                    background-color: black;
                }
            </style>
        `
    );
  }
}

// Automatically run on DOM load with hover enabled by default
document.addEventListener("DOMContentLoaded", () => hideForbiddenWords(true));
