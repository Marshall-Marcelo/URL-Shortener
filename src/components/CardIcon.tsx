import merge from "../utils/merge";

interface CardIconProps {
  imagePath: string;
  className?: string;
}

const baseStyle = "bg-very_dark_violet w-fit p-5 rounded-full absolute -top-8 ";

const CardIcon = ({ imagePath, className }: CardIconProps) => {
  return (
    <div className={merge(baseStyle, className)}>
      <img src={imagePath} alt="" />
    </div>
  );
};

export default CardIcon;

//{merge(baseStyle, className)}
