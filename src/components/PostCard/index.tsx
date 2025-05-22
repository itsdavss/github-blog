import { CardText, CardTitle, StyledLink } from "./style";

interface propsType {
  title: string,
  body: string
}

export function PostCard({title, body}: propsType) {
  return (
    <StyledLink to={"/"}>
      <CardTitle>
        <h3>{title}</h3>
        <span>Há 1 dia</span>
      </CardTitle>
      <CardText>
        <p>
          {body}
        </p>
      </CardText>
    </StyledLink>
  );
}
