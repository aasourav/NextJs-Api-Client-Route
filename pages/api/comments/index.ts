import { NextApiRequest,NextApiResponse } from "next";
import {data} from '../../../data/comments'
const comments = (req:NextApiRequest,res:NextApiResponse)=>{
   switch(req.method){
    case 'GET':
        res.status(200).json(data)
        break;
    case 'POST':
        const {txt} = req.body
        const newComment = {
            id: Date.now(),
            text:txt
        }
        data.push(newComment);
        console.log(newComment)
        res.status(200).json(data)
        break;
   }
}


export default comments;