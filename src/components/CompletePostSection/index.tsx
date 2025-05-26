import { PostDetails } from "../PostDetails";
// import ReactMarkdown from "react-markdown";
import { TextSection } from "./styles";
import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

interface PostDataProps {
  body: string;
  title: string;
  html_url: string;
  user: string;
  comments: number;
  updated_at: string;
}

export function CompletePostSection() {
  const { id } = useParams();
  const [postData, setPostData] = useState<PostDataProps>({
    body: "",
    title: "",
    html_url: "",
    user: "",
    comments: 0,
    updated_at: "",
  });

  const getPost = useCallback(async () => {
    const response = await axios.get(
      `https://api.github.com/repos/itsdavss/github-blog/issues/${id}`
    );

    const data = response.data;

    setPostData({
      body: data.body,
      title: data.title,
      html_url: data.html_url,
      user: data.user.login,
      comments: data.comments,
      updated_at: data.updated_at,
    });
  }, [id]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <>
      <PostDetails data={postData} />
      <TextSection>
        {/* <ReactMarkdown>{postData.body}</ReactMarkdown> */}
      </TextSection>
    </>
  );
}
