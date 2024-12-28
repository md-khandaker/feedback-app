import { useState } from "react";
import "./App.css";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import PostRouter from "./pages/PostRouter";
import NavigateRouter from "./pages/NavigateRouter";
import NotFound from "./pages/NotFound";
import { FeedbackProvider } from "./context/FeedbackContex";

function App() {
  const [feedback, setFedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    console.log("app", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackProvider>
      <Router>
        <Header bgColor="green" textColor="red" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    deleteFeedback={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
            <Route path="/post/:id/:name" element={<PostRouter />} />
            <Route path="/post" element={<NavigateRouter />} />
            <Route path="/post/*" element={<NavigateRouter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;
