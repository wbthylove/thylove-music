// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow } = require('electron')
const path = require('path')
const WinState = require('electron-win-state').default




process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true; // 关闭控制台的警告

function createWindow () {

  // 自定义状态
  const winState = new WinState({
    defaultWidth: 1172,
    defaultHeight: 800
  })

  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    // frame: false,
    ...winState.winOptions,


    webPreferences: {
      preload: path.resolve(__dirname, './preload/index.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,

    },
    show: false,
    frame: false,
    minHeight: 700,
    minWidth: 1000,
    icon: './favicon.ico',
    title: "thylove-music",
  })

  // 加载 index.html
  // console.log(path.resolve(__dirname, './dist/index.html'))
//   mainWindow.loadFile(path.resolve(__dirname, )) // 新增
  // mainWindow.loadFile('./dist/index.html') // 新增
  mainWindow.loadURL('http://127.0.0.1:8888/')


  // 打开开发工具
  mainWindow.webContents.openDevTools()

  winState.manage(mainWindow)
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  require("@electron/remote/main").initialize(); // 初始化
  require("@electron/remote/main").enable(mainWindow.webContents);
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
