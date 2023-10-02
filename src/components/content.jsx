import parse from "html-react-parser";

export default function PostItem({post}){
    const image = post._embedded["wp:featuredmedia"][0].source_url;

    return(
        <>
        <div className="portrait"><img src={image} alt="image" /></div>
            
            <h2>{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}
        
        </>
    )
}
 