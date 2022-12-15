import { useRouter } from 'next/router'
import React from 'react'

const GetAllRoutes = () => {
  const router = useRouter()
//   const {params} = router.query
  const {params=[]} = router.query //=[] for to avoid runtime error
  console.log(params)
//   if(params.length ===2 ){
//     return something
//   }
//   else if(params.length ===4){
//     return something
//   }
  return (
    <div>GetAllRoutes</div>
  )
}

export default GetAllRoutes