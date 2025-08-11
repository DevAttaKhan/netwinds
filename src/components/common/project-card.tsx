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
    <div className="rounded-3xl shadow-service p-5 md:p-6 max-w-[360px] w-full bg-white">
      <div className="rounded-2xl overflow-hidden mb-4">
        <Image src={img.src} width={480} height={226} alt={title} priority />
      </div>
      <p className="text-text/80 text-xs md:text-sm font-secondary mb-2">
        {meta}
      </p>
      <h5 className="font-bold font-primary text-xl md:text-2xl mb-2">
        {title}
      </h5>
      <p className="text-sm md:text-base text-text/90 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between gap-3 mt-5">
        <button className="border-gradient py-2 px-4 flex-1 font-secondary font-bold rounded-lg text-sm md:text-base">
          Visit Site
        </button>
        <button className="gradient-animation py-2 px-4 flex-1 font-secondary text-white font-bold rounded-lg text-sm md:text-base">
          Case Study
        </button>
      </div>
    </div>
  );
};
