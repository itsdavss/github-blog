import { HeaderSection } from "../../components/HeaderSection/index";
import { PostsSection } from "../../components/PostsSection";
import { ProfileSection } from "../../components/ProfileSection";

export function Home() {
  return (
    <>
      <HeaderSection />
      <ProfileSection />
      <PostsSection />
    </>
  );
}
