function component() {
  const el = document.createElement("div");

  el.innerHTML = ["hello", "webpack"].join(" ");

  return el;
}


document.body.appendChild(component());