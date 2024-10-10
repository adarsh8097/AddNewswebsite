import { useRouter } from 'next/router'
import React from 'react'

const postdetails = () => {
    const router = useRouter();
    const {id} = router.query;  // id get by url;
    console.log("get id by url",id);
    

  return (
    <div>
        <h1>This is new applicatio to  Id:{id}</h1>
       
    </div>
  )
}

export default postdetails;
