import {NextApiRequest,NextApiResponse} from 'next'
const Postdetails = (req:NextApiRequest, res:NextApiResponse)=>{
    res.status(200).json({id: 1000})
}
export default Postdetails