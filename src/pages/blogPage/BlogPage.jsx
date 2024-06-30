import React, { useEffect } from 'react'
import Blog from '../../components/blog/Blog'

const BlogPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <main>
      <Blog />
    </main>
  )
}

export default BlogPage
