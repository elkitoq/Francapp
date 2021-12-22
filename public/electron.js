const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const nodemailer = require("nodemailer");
const { ipcMain } = require('electron/main');

function createWindow() {
    const alto = 768;
    const ancho = 1366;

    const win = new BrowserWindow({
        width: ancho,
        height: alto,
        maxHeight: alto,
        maxWidth: ancho,
        minHeight: alto,
        minWidth: ancho,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: __dirname + '/icona.ico'

    })

    win.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
    )

    // win.removeMenu()
}

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'santycheto92@gmail.com', // generated ethereal user
        pass: 'xmmegthyplntmnji', // generated ethereal password
    },
});

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

ipcMain.on('sendMail', async (event, emailData) => {
    await transporter.sendMail({
        from: `"Cosmica" <santycheto92@gmail.com>`,
        to: `${emailData.email}`,
        subject: 'Informacion de Recepción',
        html: `
        <p style="font-size:25px">Información de la recepción de su equipo</p>
        <ul style="font-size:17px">
            <li style="font-size:17px"> <b>ID:  </b> ${emailData.id}</li>
            <li style="font-size:17px"><b>Nombre:</b> ${emailData.name}</li>
            <li style="font-size:17px"><b>Equipo:</b> ${emailData.equipo}</li>
            <li style="font-size:17px"><b>Estado:</b> ${emailData === '1' ? 'En Progreso' : 'En Progreso'}</li>
            <li style="font-size:17px"><b>Fecha aproximada de entrega:</b> ${emailData.deliveryDate}</li>
        </ul>
        `
    })
})

