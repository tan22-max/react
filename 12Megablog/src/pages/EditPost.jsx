import React ,{useState, useEffect} from 'react';
import { Container ,PostCard,PostForm } from '../component';
import appwriteSrvice from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post , setposts] = useState(null);
    const {slug} = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            appwriteSrvice.getPost(slug).then((post)=>{
                if(post){
                    setposts(post)
                }

                
            })
        } else{
            navigate("/")
        }
    } ,[slug , navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostCard/>
            </Container>
        </div>
    ) : null
}

export default EditPost;