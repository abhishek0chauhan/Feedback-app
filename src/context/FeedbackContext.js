import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  //fetch all data of feedback
  const fetchFeedbackData = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=asc`
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //add items
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback.id);
    setFeedback([newFeedback, ...feedback]);
  };

  //delete item
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want to delete this item!")) {
      setFeedback(feedback.filter((item) => item.id !== id));
      console.log(feedback);
    }
  };

  //set item to be updated or editable
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update item
  const updateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
