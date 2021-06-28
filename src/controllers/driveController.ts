import { HttpException } from "../common/HttpException";

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const stream = require("stream"); // Added

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

export async function uploadFile(img:string,id:string) {

    const uploadImg = img.split(/,(.+)/)[1];
    const buf = new Buffer(uploadImg, 'base64'); // Added
    const bs = new stream.PassThrough(); // Added
    bs.end(buf); // Added

    try{
        const response = await drive.files.create({
            requestBody: {
                parents:['1l2ZFlMK8pL32Yt6MJrmzYUdwq_6DX692'],
                name: id,
                mimeType: 'image/jpg'
            },
            media: {
                mimeType: 'image/jpg',
                //body: fs.createReadStream(filePath)
                body: bs
            },
        });        
        const fileId = await response.data.id;
        await drive.permissions.create({
            fileId,
            requestBody: {
                role: 'reader',
                type:'anyone'
            }
        });
        return fileId;
        
    }catch(error){
        throw new HttpException(500, error.message);
    }

}

export async function existFile(id:string) {
    try{
        const list = await drive.files.list({
            q: "mimeType='image/jpeg' and name = '"+id+"' and '1l2ZFlMK8pL32Yt6MJrmzYUdwq_6DX692' in parents",
            fields: 'nextPageToken, files(id, name)',
            spaces: 'drive',
            pageToken: null
          });
        console.log(list);
         /*  
        if(list.length > 0){
            throw new HttpException(500,'name of image exist');
        } */
        return list;
    }catch(e){
        throw new HttpException(500,'Error on existFile()');
    }
}

//existFile();

//uploadFile(img);

export async function deleteFile(id:string) {
    try{
        const response = await drive.files.delete({
            fileId: id,
        });
        return response.status;
    }catch(error){
        console.log(500, 'google drive: error deleting file, '+error.message);
    }
}

//deleteFile();

