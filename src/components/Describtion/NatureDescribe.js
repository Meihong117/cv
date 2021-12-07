import React from 'react'
import './NatureDescribeElems.css'

const NatureDescribe = ({posts, loading,searchTerm}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <div className='list'>
            <ol className='list-group'>
                {posts.filter(val=>{
                    if(searchTerm==''){
                        return val
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map(post=>( <li key={post.id} className='list-group-item'>{post.title}</li> ))}
            </ol> 
        </div>
           
        
    )
}

export default NatureDescribe
