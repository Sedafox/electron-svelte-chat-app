const { app, BrowserWindow } = require("electron/main");

// Function to create the main window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

// Wait for the app to be ready and then create the window
app.whenReady().then(() => {
  createWindow();
});

// Quit the app when all windows are closed (except on macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// Wait for the app to be ready and then create the window
app.whenReady().then(() => {
  createWindow();

  // Activate the app when the window is closed
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
