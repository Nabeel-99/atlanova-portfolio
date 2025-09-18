import { FaStar } from "react-icons/fa";

const TestimonialCard = ({
  comment,
  author,
  className,
}: {
  comment: string;
  author: string;
  className: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-4 p-6 border  lg:w-80  border-[#dadada] ${className} rounded-xl`}
    >
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} className="" />
        ))}
      </div>
      <p>{comment}</p>
      <p>{author}</p>
    </div>
  );
};

export default TestimonialCard;
