import CustomerFeedback from "@/interfaces/customerFeedback";
import { FaQuoteLeft } from "react-icons/fa";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  customerFeedback: CustomerFeedback;
}

export const Item = ({customerFeedback}: ItemProps) => {
  return (
    <div className="flex flex-col text-white items-center gap-4 md:bg-black/60 md:p-4 md:pb-6 md:mt-4 rounded-xl">
      <FaQuoteLeft className="w-7 h-7"/>
      <div>{customerFeedback.attributes.Feedback}</div>
      <div>
        <ReactMarkdown>{customerFeedback.attributes.Name}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Item;
