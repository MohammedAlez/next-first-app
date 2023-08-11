import Link from "next/link"

export default async function page(){
  console.log('articles page is running in server side')
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const articles = await res.json();
  // console.log(articles)
  const articlesJSX = articles.map((article)=>{
    return(<div key={article.id} className='p-2 w-[70%] mx-auto bg-gray-100 my-2' >
        <Link href={`articles/${article.id}`} className="font-bold hover:underline">{article.title}</Link>
        <p className="">{article.body}</p>
    </div>)
  })
    return (
    <div>
        <h1 className="text-center font-bold text-md">Articles page</h1>
        <div className='py-3'>
          {articlesJSX}
        </div>
    </div>
  )
}
