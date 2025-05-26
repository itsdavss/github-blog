import { Link } from "react-router";
import { Info, Links, PostDetailsCard, PostDetailsContainer } from "./styles";

export function PostDetails() {
  return (
    <PostDetailsContainer>
      <PostDetailsCard>
        <Links>
          <Link to={"/"}><i className="fa-solid fa-chevron-left"></i>VOLTAR</Link>
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
              <i className="fa-solid fa-calendar-day"></i> Há 1 dia
            </li>
            <li>
              <i className="fa-solid fa-comment"></i> 5 comentários
            </li>
          </Info>
        </div>
      </PostDetailsCard>
    </PostDetailsContainer>
  );
}
