import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "from context",
      rating: 10,
    },
  ]);
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    console.log("app", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackProvider>
  );
};

export default FeedbackContext;
