import React from "react";
import Card from "./shared/Card";
import { IoIosCloseCircle } from "react-icons/io";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button>
        <IoIosCloseCircle onClick={() => handleDelete(item.id)} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
