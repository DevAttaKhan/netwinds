import { icons } from "lucide-react";

type Props = {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  className?: string;
};

export const Lucide: React.FC<Props> = ({
  name,
  color = "black",
  size = 20,
  className,
}) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} className={className} />;
};
