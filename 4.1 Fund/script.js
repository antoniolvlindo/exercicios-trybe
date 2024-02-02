document.getElementById("page-title").innerText = "O senhor dos aneis";
document.getElementById("first-paragraph").innerText = "Uns doidao que tem q jogar o anel no vulcao";
document.getElementById("subtitle").innerText = "principais informacoes";

const paragraphs = document.getElementsByClassName("paragraph-style");
const firstParagraph = paragraphs[0];
firstParagraph.style.fontStyle = 'italic';

const secondParagrap = document.getElementById("second-paragraph");
secondParagrap.innerText = "filme velho e antigo, mas ainda e bom";

const subtitle = document.getElementsByTagName("h2");
subtitle[0].style.color = 'grey';