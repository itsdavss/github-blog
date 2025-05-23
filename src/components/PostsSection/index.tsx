import axios from "axios";
import { PostCard } from "../PostCard";
import { Form, Posts, PostsContainer } from "./styles";
import { useEffect, useState } from "react";

interface postsData {
  body: string;
  title: string;
}

export function PostsSection() {
  const [posts, setPosts] = useState<postsData[]>([]);
  const [query, setQuery] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    getPosts(query);
  }

  async function getPosts(query?: string) {
    const searchQuery = query
      ? `${query} repo:itsdavss/github-blog type:issue`
      : `repo:itsdavss/github-blog type:issue`;

    const response = await axios.get(`https://api.github.com/search/issues`, {
      params: {
        q: searchQuery,
      },
    });

    setPosts(response.data.items);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContainer>
      <div>
        <Form onSubmit={handleSubmit}>
          <div>
            <h1>Publicações</h1>
            <span>{posts.length} publicações</span>
          </div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            aria-label="Buscar conteúdo"
            onChange={handleChange}
          />
        </Form>
        <Posts>
          {posts &&
            posts.map((post, index) => (
              <PostCard key={index} title={post.title} body={post.body} />
            ))}
        </Posts>
      </div>
    </PostsContainer>
  );
}
