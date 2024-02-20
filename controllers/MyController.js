import express from 'express'
import XLSX from 'xlsx'

const router = express.Router();
 
 


export const readAndSend = async(req, res) => {
    try{

        const file = req.files.file
        const fileName = req.files.file.name
        // console.log(file)
        const workbook = XLSX.readFile(file);
        const sheet_name = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheet_name];
        const data = XLSX.utils.sheet_to_json(sheet);
        console.log(data);
        return res.status(200).json(data)
    }catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
}



// const XLSX = require('xlsx');
// const workbook = XLSX.readFile('path_to_your_excel_file.xlsx');
// const sheet_name = workbook.SheetNames[0];
// const sheet = workbook.Sheets[sheet_name];

// Convert the sheet data to JSON
// const data = XLSX.utils.sheet_to_json(sheet);

// console.log(data);


export default router
