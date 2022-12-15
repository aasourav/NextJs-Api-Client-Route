import {NextApiRequest,NextApiResponse} from 'next'
export default function dashboard(req:NextApiRequest,res:NextApiResponse){
    res.status(200).json("name: Hello Dashboard")
}