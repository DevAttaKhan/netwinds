import Image, { StaticImageData } from "next/image";

type Props = {
  data: {
    img: StaticImageData;
    meta: string;
    title: string;
    description: string;
  };
};

export const ProjectCard: React.FC<Props> = ({
  data: { img, meta, title, description },
}) => {
  return (
    <div className="rounded-3xl shadow-service p-4 max-w-[350px]">
      <div className="rounded-2xl overflow-hidden mb-3">
        <Image src={img.src} width={400} height={188} alt="title" priority />
      </div>
      <p className="text-text text-sm font-secondary mb-3">{meta}</p>
      <h5 className="font-bold font-primary text-xl mb-2">{title}</h5>
      <p>{description}</p>

      <div className="flex items-center justify-between gap-2 mt-5">
        <button className="border-gradient py-2 flex-1 font-secondary font-bold rounded-lg">
          Visit Site
        </button>
        <button className="gradient-animation py-2 flex-1 font-secondary text-white font-bold rounded-lg">
          Case Study
        </button>
      </div>
    </div>
  );
};
