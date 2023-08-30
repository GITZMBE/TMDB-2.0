import React, { useState, useEffect } from "react";
import { fetchReviews } from "../api/fetch";
import { splitDate } from "../utils/functions";

function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews(id, setReviews);
  }, [id]);
  return (
    <div id='reviews' className='w-full py-4 space-y-4'>
      {Object.keys(reviews).length > 0
        ? reviews.map((review, index) => (
            <div key={index} className='space-y-2 p-4 bg-secondary rounded-xl'>
              <p>Written by <span className="text-quaternary">{review.author}</span><br />Posted at <span className="text-quaternary">{splitDate(review.created_at)}</span></p>
              {/* <h2 className='text-xl font-semibold'>
                {review.author.toUpperCase()}
              </h2> */}
              <p className="w-full">{review.content} <span className="w-full text-right text-quaternary">Latest updated at {splitDate(review.updated_at)}</span></p>
            </div>
          ))
        : null}
    </div>
  );
}

export default Reviews;
