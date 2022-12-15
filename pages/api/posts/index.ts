import {NextApiRequest,NextApiResponse} from 'next'
const post = (req:NextApiRequest, res: NextApiResponse)=>{
    res.status(200).json({postId: 1})
}

export default post;