import axios from "axios";
import { PostCard } from "../PostCard";
import { Form, Posts, PostsContainer } from "./styles";
import { useEffect, useState } from "react";

interface postsData {
  body: string;
  title: string
}

export function PostsSection() {
  const [posts, setPosts] = useState<postsData[]>([]);

  async function getPosts() {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=repo:itsdavss/github-blog+type:issue`
    );
    console.log(response.data.items);

    setPosts(response.data.items);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContainer>
      <div>
        <Form>
          <div>
            <h1>Publicações</h1>
            <span>6 publicações</span>
          </div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            aria-label="Buscar conteúdo"
          />
        </Form>
        <Posts>
          {posts &&
            posts.map((post, index) => <PostCard key={index} title={post.title} body={post.body} />)}
        </Posts>
      </div>
    </PostsContainer>
  );
}
