import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded p-6 mt-12">
      <div className="flex items-center animation-fadeIn ">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="../images/PIC.png"
          alt="Author Image"
        />

        <div>
          <h3 className="text-xl font-bold">Irfan Zaidi</h3>
          <p className="text-slate-500">
            Graphic Designer | Video Editor | Web Developer
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        "Highly motivated and versatile professional with expertise in video
        editing and front-end development. Proven track record of delivering
        high-quality content for television and digital platforms, alongside
        crafting responsive and high-performance web applications that provide
        seamless user experiences across devices. Currently enhancing my skills
        at the Governor Sindh Initiative for Artificial Intelligence, Web 3.0,
        and Metaverse (GIAIC), with a passion for staying updated on the latest
        technological innovations."
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="https://www.instagram.com/irfanzaidi75/"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 duration-300">
            Instagram
          </a>
          <a
          href="https://www.linkedin.com/in/irfan-hussain-12b66361/"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 duration-300">
            LinkedIn
          </a>
          <a
          href="https://github.com/sirfanzaidi"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 duration-300">
            GitHub
          </a>
      </div>
    </div>
  );
}
