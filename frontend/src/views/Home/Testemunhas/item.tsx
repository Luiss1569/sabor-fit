import CustomerFeedback from "@/interfaces/customerFeedback";
import { FaQuoteRight } from "react-icons/fa";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const STRAPI_URI = process.env.STRAPI_URI;

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  customerFeedback: CustomerFeedback;
}

export const Item = ({customerFeedback}: ItemProps) => {
  return (
    <div className="flex flex-col gap-4 bg-black/60 rounded-md md:rounded-none">
      <FaQuoteRight />
      <div>{customerFeedback.attributes.Feedback}</div>
      <div>
        <ReactMarkdown>{customerFeedback.attributes.Name}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Item;
