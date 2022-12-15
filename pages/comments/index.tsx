import axios from 'axios'
import React, { useState } from 'react'

interface ICmnt {
  text: string;
  id: number
}


const Comment = () => {
  const [cmnt,setCmnt] = useState<ICmnt[]>([])
  const [Txt, setTxt] = useState("")

  const fetchComnt = async()=>{
    const {data} = await axios.get<ICmnt[]>('/api/comments')
    
    setCmnt(data)
    console.log(data)

  }
  const cngText = (e: React.FormEvent<HTMLInputElement>)=>{
    setTxt(e.currentTarget.value);
  }
  const submitData = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const {data} = await axios.post('/api/comments',{
      txt:Txt
    })
  }
  const dltComment = async(commentId : number)=>{
      const res = await axios.delete(`/api/comments/${commentId}`)
      console.log(res.data)
  }
  return (
    <div>
      <form onSubmit={submitData}>
        <input type="text" value={Txt} onChange={cngText} />
        <button name='submit'>Add Comment</button>
        <br/>
      </form>
      <button onClick={fetchComnt}>Click to Load Comment</button>
      <div>
       {cmnt.length && cmnt.map(d=>(<div key={Math.random()}>{d.id} {d.text} <button name='dlt' onClick={()=>dltComment(d.id)}>Delete</button></div>))}
      </div>

    </div>
  )
}

export default Comment