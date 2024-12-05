import React from "react";
import BlogCard from "./BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "The Power of Education: Changing Lives Every Day",
      description:
        "Explore how education transforms individuals and communities, empowering them to achieve their dreams.",
      date: "2024-12-05",
      image: "../images/blog1.jpg",
    },
    {
      id: "2",
      title: "Study Smarter, Not Harder",
      description:
        "Learn tips and strategies to make your study sessions more effective and enjoyable.",
      date: "2024-12-03",
      image: "../images/blog2.jpg",
    },
    {
      id: "3",
      title: "Future Skills: Mastering Coding for a Digital World",
      description:
        " Understand the importance of coding in today's tech-driven society and how you can start learning.",
      date: "2024-12-01",
      image: "../images/blog3.jpg",
    },
    {
      id: "4",
      title: "Teaching Techniques That Make a Difference",
      description:
        "Innovative methods teachers use to create engaging and impactful learning environments.",
      date: "2024-12-05",
      image: "../images/blog4.jfif",
    },
    {
      id: "5",
      title: "The Value of Teamwork in Learning",
      description:
        "Discover how collaborative learning can foster creativity, critical thinking, and stronger problem-solving skills.",
      date: "2024-12-03",
      image: "../images/blog2.jpg",
    },
    {
      id: "6",
      title: "Exploring Artificial Intelligence in Education",
      description:
        "How AI is revolutionizing the way we learn, from personalized curriculums to virtual classrooms.",
      date: "2024-12-01",
      image: "../images/blog3.jpg",
    },
  ];
  return (
    <div className="mx-8">
      <h1 className="text-3xl font-bold text-center mx-8 text-red-600 animate-color-change ">
        Exploring the World of Education and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <div className="fade-in" key={post.id}>
          <div className="blog-card">
          <BlogCard post={post} isDarkBackground={index % 2 === 0} />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
