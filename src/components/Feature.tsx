import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[5px] hover:text-black text-red-600 ">
          Irfan Zaidi : Navigating the Secrets of Technology in Tech Chrnicles
          Blog!
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          "Highly motivated and versatile professional with expertise in video
          editing and front-end development. Proven track record of delivering
          high-quality content for television and digital platforms, alongside
          crafting responsive and high-performance web applications that provide
          seamless user experiences across devices. Currently enhancing my
          skills at the Governor Sindh Initiative for Artificial Intelligence,
          Web 3.0, and Metaverse (GIAIC), with a passion for staying updated on
          the latest technological innovations."
        </p>

        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animat-color-change">
            Exploring Our Categories
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 aniate-fade-in-up delay-100">
            {
              [
                "Technology",
                "Artificial Intelligence",
                "HTML",
                "Virtual Reality",
                "Next Js",
                "Web Development",
              ].map((category, index) =>(
                <div key={index}
                className="relative group p-6 bg-white rounded-lg hover:bg-sky-300 hover:text-black transition-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
                >
                  <p className="text-center text-lg font-semibold">
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg tansition duration-300 ease-in-out ">
                    </div>
                    {category}
                  </p>

                  
                </div>
              ))
            }
          </div>
        </div> 
        <p className="text-sm md:text-bas text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
        "Highly motivated and versatile professional with expertise in video
          editing and front-end development. Proven track record of delivering
          high-quality content for television and digital platforms, alongside
          crafting responsive and high-performance web applications that provide
          seamless user experiences across devices. Currently enhancing my
          skills at the Governor Sindh Initiative for Artificial Intelligence,
          Web 3.0, and Metaverse (GIAIC), with a passion for staying updated on
          the latest technological innovations."
        </p>
      </section>
    </div>
  );
}
