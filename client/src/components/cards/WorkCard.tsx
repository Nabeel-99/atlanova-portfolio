type WorkCardProps = {
  image: string;
  title: string;
  alt: string;
  description: string;
  category: string;
  year: string;
  quote: string;
  author: string;
  className?: string;
};
const WorkCard = ({
  image,
  title,
  alt,
  description,
  category,
  year,
  quote,
  author,
  className,
}: WorkCardProps) => {
  return (
    <div className={`w-full p-6 lg:p-10  rounded-xl ${className}`}>
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="order-2 lg:order-first">
          <img
            src={image}
            alt={alt}
            className=" w-full h-[300px]  md:h-[500px] lg:w-[1200px] rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl lg:text-4xl font-bold">{title}</h3>
          <p className="text-lg leading-relaxed">{description}</p>
          <div className="flex items-center gap-4">
            <p className="bg-black text-white px-4 py-1 rounded-full flex items-start justify-start">
              {category}
            </p>
            <p className="bg-black text-white px-4 py-1 rounded-full flex items-start justify-start">
              {year}
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-5xl font-bold">“</span>
            <div className="flex flex-col gap-3">
              <p className="text-lg leading-relaxed">{quote}</p>
              <p className="italic font-extrabold">- {author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
