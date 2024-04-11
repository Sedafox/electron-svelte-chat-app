const { app, ipcMain, BrowserWindow } = require("electron");
const path = require("path");

// Function to create the main window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.ts"),
    },
  });

  win.loadFile(path.join(__dirname, "public/index.html"));
};

// Create the main window when the app is ready
app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  createWindow();

  // Re-create the main window when the app is activated (on macOS)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit the app when all windows are closed (except on macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
