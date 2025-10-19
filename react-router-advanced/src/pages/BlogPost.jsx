import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <h2>Showing post with ID: {id}</h2>;
}
export default BlogPost;
