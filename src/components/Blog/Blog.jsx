import axios from 'axios'
import { useState, useEffect } from 'react'
import { Eye, MessageSquare, Heart } from 'lucide-react'

function BlogPage() {
  const [posts, setPosts] = useState([]) 

  useEffect(() => {
    axios.get('https://green-shop-backend.onrender.com/api/user/blog?access_token=680bac52073c8af77e8a405f')
      .then(res => {
        if (Array.isArray(res.data)) {
          setPosts(res.data) // Agar res.data massiv bo'lsa, posts ga saqlaymiz
        } else {
          console.error('API ma\'lumotlari massiv formatida emas', res.data)
        }
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <section className='max-[1270px]:mx-[20px] max-w-[1211px] m-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className='border rounded-2xl p-6 flex flex-col justify-between w-[350px] h-[400px] shadow-sm'>
              <div>
                <h2 className='text-2xl font-bold mb-4'>{post.title}</h2>
                <p className='text-gray-600 text-sm'>
                  {post.excerpt} {/* Excerpt yoki qisqacha mazmun */}
                </p>
              </div>

              <div className='border-t my-4'></div>

              <div className='flex items-center justify-around text-gray-500 text-sm'>
                <div className='flex items-center gap-1'>
                  <Eye className='w-4 h-4' />
                  <span>{post.views}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <MessageSquare className='w-4 h-4' />
                  <span>{post.comments}</span> 
                </div>
                <div className='flex items-center gap-1'>
                  <Heart className='w-4 h-4' />
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </section>
  )
}

export default BlogPage
