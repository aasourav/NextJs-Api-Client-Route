import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


const Blog = ({pageNum=100}) => {
  const router = useRouter()
  const handleClick = (e:React.MouseEvent<HTMLElement>)=>{
      console.log('Placing your order....')
  router.push('/')
  }
  const handle = ()=>{
    router.replace('/')
  }
  return (
    <div>
      <h1>Blog Page</h1>
      <Link href='/'>
          Go Home
      </Link>
      <ul>
        <li>
          <Link href='/blog/1'>Prod 1</Link>
        </li>
        <li>
          <Link href={`/blog/${pageNum}`}> Prod {pageNum}</Link>
        </li>
        <li>
          <button onClick={handleClick}>router.push()</button>
        </li>
        <li>
          <button onClick={handle}>router.replace()</button>
        </li>
      </ul>
    </div>

  )
}

export default Blog