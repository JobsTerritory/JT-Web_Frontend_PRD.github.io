import React from "react";

function ReadMore({ review }) {
  const [showButton, setShowButton] = React.useState(true);
  const [reviewText, setReviewText] = React.useState(review.slice(0, 180));
  //   let reviewText = review.slice(0, 180);
  const clickHandler = () => {
    setShowButton((prevState) => !prevState);
    if (showButton) {
      setReviewText(review);
    } else {
      setReviewText(review.slice(0, 180));
    }
  };
  return (
    <div>
      {reviewText} 
      <button onClick={clickHandler} className="text-sm">
        {showButton ? " ...read more" : " ...read less"}
      </button>
    </div>
  );
}

export default ReadMore;
