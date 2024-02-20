import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import myrouter from './routes/myrouter.js'
import multer from 'multer';
import XLSX from 'xlsx'
 

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));
app.use(cors());
const upload = multer({ dest: 'uploads/' });

// app.use(fileUpload());
// app.use(express.static("files"));

// app.use("/",myrouter);


app.post('/upload', upload.single('file'), (req, res) => {
    // Get the path of the uploaded file
    const filePath = req.file.path;
  
    // Read the Excel file
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];

 // for reading the tabs change index of the sheetNames
    const sheet = workbook.Sheets[sheetName];
  
    // Convert the sheet data to JSON
    const data = XLSX.utils.sheet_to_json(sheet);
  
    // Respond with the data
    res.json(data);
  });

const CONNECTION_URL = '';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server is running on port ${PORT}`)))
.catch((err)=>console.log(err.message));
