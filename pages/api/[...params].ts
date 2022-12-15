import {NextApiRequest,NextApiResponse} from 'next'
const handler = (req:NextApiRequest, res:NextApiResponse)=>{
    const params = req.query.params;
    console.log(params);
    res.status(200).json(params)
}
export default handler