import { Link } from "react-router";
import { Info, Links, PostDetailsCard, PostDetailsContainer } from "./styles";

export function PostDetails() {
  return (
    <PostDetailsContainer>
      <PostDetailsCard>
        <Links>
          <Link to={"/"}>VOLTAR</Link>
          <Link to={"/"}>
            VER NO GITHUB
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </Links>
        <div>
          <h1>JavaScript data types and data structures</h1>
          <Info>
            <li>
              <i className="fa-brands fa-github" /> cameronwll
            </li>
            <li>
              <i className="fa-solid fa-calendar"></i> Há 1 dia
            </li>
            <li>
              <i className="fa-solid fa-comment-dots"></i> 5 comentários
            </li>
          </Info>
        </div>
      </PostDetailsCard>
    </PostDetailsContainer>
  );
}
