import {NextApiRequest,NextApiResponse} from 'next'
import {data}  from '../../../data/comments'

const handler  = (req:NextApiRequest , res:NextApiResponse)=>{
    const cText = req.query.commentID as string;

    if(req.method === 'GET'){
        const comment = data.find(cmnt => cmnt.id === parseInt(cText))
        res.status(200).json(comment)
    }
    else if(req.method === 'DELETE'){
        const dltCmnt = data.find(
            (cmnt)=> cmnt.id === parseInt(cText)
        )
        const finIndex = data.findIndex(
            (cmnt)=> cmnt.id === parseInt(cText)
        )

        data.splice(finIndex,1)
        res.status(200).json(dltCmnt)
    }
}
export default handler;