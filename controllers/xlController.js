import express from 'express'

const router = express.Router();


export const readAndSend = async(req, res) => {
    try{
        return res.status(200).json("Ok from readFile")
    }catch(err) {
        return res.status(500).json("error"=err)
    }
}


export default router