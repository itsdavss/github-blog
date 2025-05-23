import { formatDistanceToNow } from "date-fns";
import { CardText, CardTitle, StyledLink } from "./style";
import { ptBR } from "date-fns/locale";

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
        <span>{formatDistanceToNow(updatedAt, {
          addSuffix: true,
          locale: ptBR,
        })}</span>
      </CardTitle>
      <CardText>
        <p>{body}</p>
      </CardText>
    </StyledLink>
  );
}
