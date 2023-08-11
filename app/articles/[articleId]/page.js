import PageDetails from "@/app/components/PageDetails";
import { Suspense } from "react";

export default async function page ({params}){
    
    return (
        <div className=''>
            <div>This is the article details page</div>
            <Suspense fallback={<div>Loading....</div>}>
                <PageDetails articleId={params.articleId}/>
            </Suspense>
        </div>
    )
}
