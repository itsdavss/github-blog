import { Link } from "react-router";
import { Info, Links, PostDetailsCard, PostDetailsContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostDetailsProps {
  data: {
    title: string;
    html_url: string;
    user: string;
    comments: number;
    updated_at: string;
  };
}

export function PostDetails({ data }: PostDetailsProps) {
  return (
    <PostDetailsContainer>
      <PostDetailsCard>
        <Links>
          <Link to={"/"}>
            <i className="fa-solid fa-chevron-left"></i>VOLTAR
          </Link>
          <Link to={data.html_url} target="_blank">
            VER NO GITHUB
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </Links>
        <div>
          <h1>{data.title}</h1>
          <Info>
            <li>
              <i className="fa-brands fa-github" /> {data.user}
            </li>
            <li>
              <i className="fa-solid fa-calendar-day"></i>{" "}
              {data.updated_at
                ? formatDistanceToNow(new Date(data.updated_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })
                : "Data inválida"}
            </li>
            <li>
              <i className="fa-solid fa-comment"></i> {data.comments}{" "}
              comentários
            </li>
          </Info>
        </div>
      </PostDetailsCard>
    </PostDetailsContainer>
  );
}
