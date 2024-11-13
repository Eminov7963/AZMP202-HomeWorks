const header = document.createElement("header");

const headDiv = document.createElement("div");
headDiv.className = "head";
headDiv.style.display = "flex";
headDiv.style.justifyContent = "center";
headDiv.style.width = "70%";
headDiv.style.margin = "0 auto";

const imgHeader = document.createElement("img");
imgHeader.src = "https://www.sailing-jworld.com/deepblueacquisitions.com/images/demo/960x360.gif";
imgHeader.style.width = "100%";

headDiv.append(imgHeader);
header.append(headDiv);
document.body.append(header);

const main = document.createElement("main");
main.style.marginTop = "20px";
const maindiv = document.createElement("div");
maindiv.style.width = "70%";
maindiv.style.display = "flex";
maindiv.style.justifyContent = "center";
maindiv.style.margin = "0 auto";

function createContentBlock() {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.width = "30%";
  div.style.margin = "0 10px";

  const img = document.createElement("img");
  img.src = "https://www.sailing-jworld.com/deepblueacquisitions.com/images/demo/960x360.gif";
  img.style.width = "100%";

  const textDiv = document.createElement("div");    
  textDiv.style.width = "100%";

  const h1 = document.createElement("h1");
  h1.textContent = "Emin";

  const a = document.createElement("a");
  a.textContent = "Read More";
  a.href = "#";
  a.style.textDecoration = "none";
  const p = document.createElement("p");
  p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  textDiv.append(p, a);



  div.append(img, h1, textDiv);

  return div;
}

maindiv.append(createContentBlock(), createContentBlock(), createContentBlock());
main.append(maindiv);
document.body.append(main);
