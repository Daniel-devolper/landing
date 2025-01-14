import Container from "@/components/Container";
import Header from "@/components/Header";
import PostHeader from "@/components/PostHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <PostHeader/>
      <Container/>
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
  );
}
