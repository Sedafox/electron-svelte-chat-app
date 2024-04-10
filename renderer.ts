interface Versions {
  chrome: () => string;
  node: () => string;
  electron: () => string;
  ping?: () => Promise<string>; // Optional `ping` function that returns a Promise<string>
}

interface Window {
  versions: Versions;
}

declare const versions: Versions;

const information = document.getElementById("info");
if (information) {
  information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
}

const func = async () => {
  if (window.versions.ping) {
    const response = await window.versions.ping();
    console.log(response);
  }
};
func();
