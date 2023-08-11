import Post from "@/app/components/Post";

const page = async (props) => {
  // console.log(props)
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.post}`,{
    next:{
      revalidate:60
    }
  });
  const data = await response.json();
  // console.log(data);
  return (
    <div>
        <h1 className='font-bold p-2 px-4'>Post {props.params.post}</h1>
        <h1 className='font-bold p-2 px-4'>Post {data.title}</h1>
        <div> using the client component</div>
        {/* this is a client side component */}
        {/* <Post /> */}
    </div>
  )
}

export default page