"use client"
import { useEffect, useState } from "react";



export default function Post(){
    const [post,setPost] = useState({});
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
            const data = await res.json();
            // console.log(data);
            setPost(data);
        }
        fetchData();
    },[])
    // console.log(post);
    return (
        <div>{post?.title}</div>
    )
}