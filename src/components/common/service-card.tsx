interface Props {
  data: {
    Icon: React.ElementType;
    title: string;
    description: string;
  };
}

export const ServiceCard: React.FC<Props> = ({
  data: { Icon, title, description },
}) => {
  return (
    <div className="shadow-service rounded-3xl p-5 md:p-8 lg:p-12 text-center">
      <div className="mx-auto w-max mb-3 md:mb-4 lg:mb-6 [&_svg]:w-20 md:[&_svg]:w-32">
        <Icon />
      </div>
      <h3 className="font-primary text-xl md:text-2xl font-bold mb-2 md:mb-3 lg:mb-5">
        {title}
      </h3>
      <p className="font-secondary text-base md:text-lg lg:text-xl">
        {description}
      </p>
    </div>
  );
};
