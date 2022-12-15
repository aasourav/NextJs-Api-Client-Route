import { useRouter } from 'next/router'
import React from 'react'

const Subpage = () => {
  const router = useRouter()
  const prodId = router.query.prodId
  return (
    <div>This is Product {prodId}</div>
  )
}

export default Subpage