import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContex";
import About from "./pages/About";
import NavigateRouter from "./pages/NavigateRouter";
import NotFound from "./pages/NotFound";
import PostRouter from "./pages/PostRouter";

function App() {
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
