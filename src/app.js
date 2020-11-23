import yaml from './data.yaml';

function component() {
  const el = document.createElement("div");

  el.innerHTML = yaml.title;

  return el;
}


document.body.appendChild(component());