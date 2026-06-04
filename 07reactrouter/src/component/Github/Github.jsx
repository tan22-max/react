import React from 'react';
import { useEffect  , useState} from 'react';




function Github() {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/tan22-max')
        .then(Response => Response.json())
        .then(data =>{
            console.log(data);
            setdata(data);
        })
    } ,[])

    return ( 
        <div className= 'text-center bg-grey-500 text-white m-4 ' >
            Username :{data.login} 
            <img src={data.avatar_url} alt=" git-picture" width={300} className ="rounded-full" />
        </div>
     );
}

export default Github;