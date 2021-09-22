import React from 'react'
import './NatureDescribeElems.css'

const NatureDescribe = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>

    }
    return (
        <div className='list'>
            <ol className='list-group mb-4'>{posts.map(post=>( <li key={post.id} className='list-group-item'>{post.title}</li> ))}</ol> 
        </div>
           
        
    )
}

export default NatureDescribe
