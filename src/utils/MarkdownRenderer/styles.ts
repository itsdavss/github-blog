import styled from "styled-components"

export const MarkdownBody = styled.section`
  line-height: 1.6;
  padding: 1rem;

  h1, h2, h3{ 
    margin-top: 1.5em;
  }

  pre {
    margin-top: 10px;
    background-color: #f6f8fa;
    padding: 1em;
    overflow-x: auto;
    border-radius: 4px;
  }

  a {
    text-decoration: underline; 
  }

  p {
    margin-top: 10px;
  }

`
