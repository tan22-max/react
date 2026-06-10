import React ,{ useState , useEffect}from 'react';
import { Container , PostCard } from '../component';
import appwriteSrvice from "../appwrite/config"


function AddPost() {
    const [posts , setposts] = useState([]);
    useEffect(()=>{},[])
    appwriteSrvice.getPosts([]).then((posts) =>{
        if(posts){
            setposts(posts.documents)
        }

    })
    return (  
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post)=>(
                        <div key = {post.$id} className='p-2 w-1/4'>
                            <PostCard post = {post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
        
    );
}

export default AddPost;