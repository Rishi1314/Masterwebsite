import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
const Grid = () => {
    return (
      <div className="bg-[#010204] pb-5">
            <BentoGrid className="w-[70vw]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          id={item.id}
          title={item.title}
          description={item.description}
          // header={item.header}
          //   icon={item.icon}
          className={item.className}
          titleClassName={item.titleClassName}
        />
      ))}
    </BentoGrid>
      </div>
    
  )
}

// const Skeleton = () => (
//     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
//   );
  const items = [
    {
    id: 1,
    title: "I’m Rishi Raj Bobbarapalli, a Computer Science graduate student passionate about AI, web development, and solving real-world problems through technology. With experience in building innovative software and leading workshops, I enjoy creating solutions that inspire and empower. Outside of tech, I love basketball and collaborative challenges. ",
    description: "Who am I?",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start  text-2xl text-[#fff]",
    // img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    // img: "/grid.svg",
    // spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    // img: "/b5.svg",
    // spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Talk.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center text-xl font-bold text-white md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
    
  ];
export default Grid