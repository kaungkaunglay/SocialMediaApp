import Post from "../post/Post";
import {useQuery} from '@tanstack/react-query'
import "./posts.scss";
import { makeRequest } from "../../axios";
const Posts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await makeRequest.get("/posts");
      return res.data;
    }
  });
  return <div className="posts">
    {error ? "something went wrong" : (isLoading? "loading" : data.map(post=>(
      <Post post={post} key={post.id}/>
    )))}
  </div>;
};

export default Posts;