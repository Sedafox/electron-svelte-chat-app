interface Versions {
  chrome: () => string;
  node: () => string;
  electron: () => string;
}

declare const versions: Versions;

const information = document.getElementById("info");
if (information) {
  information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
}
