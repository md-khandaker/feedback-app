import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "from context",
      rating: 10,
    },
  ]);
  return <FeedbackProvider value={{ feedback }}>{children}</FeedbackProvider>;
};

export default FeedbackContext;
