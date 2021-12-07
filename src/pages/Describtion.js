import React,{useState, useEffect} from 'react'
import axios from 'axios'
import NatureDescribe from '../components/Describtion/NatureDescribe'
import Pagination from '../components/Describtion/Pagination'
import '../components/Describtion/NatureDescribeElems.css'


const Describtion = () => {
    const [posts,SetPosts]=useState([])
    const [loading, setLoading]=useState(false)
    const [currentPage, setCurrentPage]=useState(1)
    const [postsPerPage]=useState(10)

    useEffect(() => {
        const fetchPosts=async()=>{
            setLoading(true)
            const res=await axios.get('http://jsonplaceholder.typicode.com/posts')
            SetPosts(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])
    
    // Get current posts
    const indexOfLastPost=currentPage * postsPerPage
    const indexOfFirstPost=indexOfLastPost - postsPerPage
    const currentPosts=posts.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    // Search - input
    const [searchTerm, setSearchTerm] =useState('')

    return (
        <div className='container'>
            <a href="/" className='logo'>LOGO</a>
            <div className='wrapper'>
                <div>
                    <h1 className='text-primary'>Nature Describtions</h1>

                    <div className='input-div'><input type="text" placeholder='Search...' className='search-input' onChange={event=>{setSearchTerm(event.target.value)}} /></div> 

                    <NatureDescribe posts={currentPosts} loading={loading} searchTerm={searchTerm}/>

                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
                </div>
            </div>
        </div>
        
    )
}

export default Describtion
