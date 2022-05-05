import React from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  // const handleClick = (id) => {
  //   console.log(id);
  // };

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => deleteFeedback(item.id)} color="purple" />
      </button>
      <button className="edit">
        <FaEdit onClick={() => editFeedback(item)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
