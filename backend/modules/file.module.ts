import axios from 'axios';
import fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';
import builder from 'xmlbuilder';
import ExcelJS from 'exceljs';
import { Request, Response } from 'express';

export const create = (req: Request, res: Response) => {
    return new Promise(async (resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const data = response.data;
            const file = req.params;
            const types = ['csv', 'xml', 'excel'];

            if(!types.includes(file.type.toLowerCase())) {
                reject({
                    response: false,
                    message: 'Wrong type',
                    data: null
                });
            } else if(file.type.toLowerCase() === 'csv') {
                createCSV(file, data);
            } else if(file.type.toLowerCase() === 'xml') {
                createXML(file, data);
            } else if(file.type.toLowerCase() === 'excel') {
                createEXCEL(file, data);
            }

            resolve({
                response: true,
                message: 'File created successfully',
                data: file.name+'.'+((file.type.toLowerCase() === 'excel') ? 'xlsx' : file.type.toLowerCase())
            });
        })
        .catch((err) => {
            reject({
                response: false,
                message: 'No data',
                data: err
            });
        });
    });
};

export const list = (req: Request, res: Response) => {
    return new Promise((resolve, reject) => {
        const folderPath = './public/files'; 
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                reject({
                    response: false,
                    message: 'error',
                    data: err
                });
            } else {
                resolve({
                    response: true,
                    message: 'Get files successfully',
                    data: files
                }); 
            }
        });
    });
};

export const download = (req: Request, res: Response) => {
    return new Promise(async (resolve, reject) => {
        const filename = req.params.filename;
        const filePath = 'public/files/'+filename;
        try{
            res.setHeader('Content-disposition', 'attachment; filename='+filename);
            res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);
            resolve({
                response: true,
                message: 'File downloaded successfully',
                data: []
            }); 
        }
        catch(err){
            reject({
                response: false,
                message: 'error',
                data: err
            });
        }
    });
};

export const remove = (req: Request, res: Response) => {
    return new Promise((resolve, reject) => {
        const folderPath = './public/files/';
        const filename = req.params.filename;
        const filePath = folderPath + filename;
        fs.unlink(filePath, (err) => {
            if (err) {
                reject({
                    response: false,
                    message: 'error',
                    data: err
                });
            } else {
                resolve({
                    response: true ,
                    message: 'File deleted successfully' ,
                    data: []
                });
            }
        });
    });
};

function createCSV(file: any, data: any) {
    const csvWriter = createObjectCsvWriter({
        path: 'public/files/'+file.name+'.'+file.type,
        header: [
            { id: 'userId', title: 'User ID' },
            { id: 'id', title: 'Id' },
            { id: 'title', title: 'Title' },
            { id: 'body', title: 'Body' },
        ]
    });
    csvWriter
    .writeRecords(data)
    .then(() => console.log('CSV file written successfully'));
}

function createXML(file: any, data2: any) {
    const data = {
        root: {
            data: data2
        }
    };
    const xml = builder.create(data);
    const xmlString = xml.end({ pretty: true });
    fs.writeFileSync('public/files/'+file.name+'.'+file.type, xmlString, 'utf-8');
}

function createEXCEL(file: any, data: any) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');
    worksheet.addRow(['User ID', 'ID','Title','Body']);
    data.forEach((item: any) => {
        worksheet.addRow([item.userID, item.id,item.title,item.body]);
    });
    workbook.xlsx.writeFile('public/files/'+file.name+'.xlsx')
    .then(() => {
        console.log('Excel file written successfully');
    })
    .catch(error => {
        console.error('Error writing Excel file:', error);
    });
}
