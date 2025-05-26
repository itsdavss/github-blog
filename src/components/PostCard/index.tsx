import { formatDistanceToNow } from "date-fns";
import { CardText, CardTitle, StyledLink } from "./style";
import { ptBR } from "date-fns/locale";
import ReactMarkdown from "react-markdown";

interface propsType {
  title: string;
  body: string;
  updatedAt: string;
}

export function PostCard({ title, body, updatedAt }: propsType) {
  return (
    <StyledLink to={"/"}>
      <CardTitle>
        <h3>{title}</h3>
        <span>
          {formatDistanceToNow(updatedAt, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </CardTitle>
      <CardText>
        <ReactMarkdown>
          {body}
        </ReactMarkdown>
      </CardText>
    </StyledLink>
  );
}
