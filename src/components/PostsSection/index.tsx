import { PostCard } from "../PostCard";
import { Form, Posts, PostsContainer } from "./styles";

export function PostsSection() {
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
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </Posts>
      </div>
    </PostsContainer>
  );
}
