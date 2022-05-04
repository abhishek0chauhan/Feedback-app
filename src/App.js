import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/feedbackdata";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeebackForm from "./components/FeebackForm";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want to delete this item!")) {
      setFeedback(feedback.filter((item) => item.id !== id));
      console.log(feedback);
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback.id);
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeebackForm handleAdd={addFeedback} />
        <FeedbackStats FeedbackData={feedback} />
        <FeedbackList handleDelete={deleteFeedback} FeedbackData={feedback} />
      </div>
    </>
  );
}

export default App;
