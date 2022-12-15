import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
const Subpage = () => {
  const router = useRouter()
  const prodId = router.query.productId
  return (
    
    <div>
      <Link href='/'>
          Go Home
      </Link>
      <p>This is Product {prodId}</p>
    </div>
  )
}

export default Subpage