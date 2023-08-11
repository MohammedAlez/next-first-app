


export default async function PageDetails ({articleId}){
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },[2000])
    })
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`);
    const article = await res.json(); 
    console.log(articleId)
    return (
        <div className='p-2 bg-gray-200 '>
            <h1 className='font-bold text-md'>{article.title}</h1>
            <p className='' >{article.body}</p>
        </div>
    )
}
