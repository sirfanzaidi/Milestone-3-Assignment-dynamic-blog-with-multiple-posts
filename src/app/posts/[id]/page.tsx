"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
import { title } from "process";
import Footer from "@/components/Footer";

const posts = [
  {
    id: "1",
    title: "The Power of Education: Changing Lives Every Day",
    description:
      "Explore how education transforms individuals and communities, empowering them to achieve their dreams.",
    image: "../images/blog1.jpg",
  },
  {
    id: "2",
    title: "Study Smarter, Not Harder",
    description:
      "Learn tips and strategies to make your study sessions more effective and enjoyable.",
    image: "../images/blog2.jpg",
  },
  {
    id: "3",
    title: "Future Skills: Mastering Coding for a Digital World",
    description:
      " Understand the importance of coding in today's tech-driven society and how you can start learning.",
    image: "../images/blog3.jpg",
  },
  {
    id: "4",
    title: "Teaching Techniques That Make a Difference",
    description:
      "Innovative methods teachers use to create engaging and impactful learning environments.",
    image: "../images/blog4.jfif",
  },
  {
    id: "5",
    title: "The Value of Teamwork in Learning",
    description:
      "Discover how collaborative learning can foster creativity, critical thinking, and stronger problem-solving skills.",
    image: "../images/blog2.jpg",
  },
  {
    id: "6",
    title: "Exploring Artificial Intelligence in Education",
    description:
      "How AI is revolutionizing the way we learn, from personalized curriculums to virtual classrooms.",
    image: "../images/blog3.jpg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found </h2>
    );
  }

  const renderParagraph = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}{" "}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center ">
        {post.title}
      </h1>
      {post.image && (
      <img 
      src={post.image}
      alt={post.title}
      className="w-full h-auto rounded-md mt-4" />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraph(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer/>
    </div>
  );
}
