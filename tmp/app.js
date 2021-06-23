const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '483550590360-in9jc01t4l6nmgbd2pcrtl1rku8ep8h4.apps.googleusercontent.com';
const CLIENT_SECRET = 'r3r87dxTRI7CcCMvlSa8140p';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04PcOIcf43y3qCgYIARAAGAQSNwF-L9IrvdpY5POJpQtavgu4Mc1H_vJJIUrwO5URY4wNiy6MP8esVsDDW8xRTaQsi4tzt_Fch5c';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

const filePath = path.join(__dirname, 'oracion.jpg');

async function uploadFile() {
    try{
        const response = await drive.files.create({
            requestBody: {
                parents:['1l2ZFlMK8pL32Yt6MJrmzYUdwq_6DX692'],
                name: 'oracion_file',
                mimeType: 'image/jpg'
            },
            media: {
                mimeType: 'image/jpg',
                body: fs.createReadStream(filePath)
            },
        });
        console.log(response.data)
    }catch(error){
        console.log(error.message);
    }

}

uploadFile();

async function deleteFile() {
    try{
        const response = await drive.files.delete({
            fileId: '18jEFMXuWhAXxzMouOkCK5O8R6EgDqUTd',
        });
        console.log(response.data, response.status);
    }catch(error){
        console.log(error.message);
    }
}

//deleteFile();

async function generateUrl() {
    try{
        const fileId = '18jEFMXuWhAXxzMouOkCK5O8R6EgDqUTd';
        await drive.permissions.create({
            fileId,
            requestBody: {
                role: 'reader',
                type:'anyone'
            }
        });
        const result = await drive.files.get({
            fileId,
            fields: 'webViewLink, webContentLink'
        });
        console.log(result.data)
    }catch(error){
        console.log(error.message);
    }
}

//generateUrl();