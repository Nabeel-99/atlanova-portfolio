type IconCardProps = {
  icon: any;
  title: string;
  description: string;
};
const IconCard = ({ icon, title, description }: IconCardProps) => {
  return (
    <div className="flex icon-card lg:p-6 flex-col gap-4 items-center justify-center">
      <div>{icon}</div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default IconCard;
