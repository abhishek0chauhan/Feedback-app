//import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ FeedbackData, handleDelete }) {
  if (!FeedbackData || FeedbackData.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {FeedbackData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              handleDelete={handleDelete}
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {FeedbackData.map((item) => (
  //       <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
