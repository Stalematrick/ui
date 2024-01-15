import React, { useState } from "react";

const Comments = () => {
  const [commentsList, setCommentsList] = useState([]);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const addComment = () => {
    if (author && comment) {
      setCommentsList([
        ...commentsList,
        { author: author, text: comment, date: new Date().toLocaleString() },
      ]);
    } else {
      window.alert("fill all fields!");
    }

    setAuthor("");
    setComment("");
    console.log(commentsList);
  };

  const removeComment = (index) => {
    if (index) {
      let comments = [...commentsList];
      comments.splice(index, 1);
      setCommentsList(comments);
    }
  };

  return (
    <center>
      <div className={"comments_wrapp"}>
      <div style={{ textColor: "#F5F5F5"}}>
        Comments
        <div className="flex_col">
          <div>
            <input
              value={author}
              onInput={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="input your name"
              
            />
          </div>
          <div>
            <textarea
              value={comment}
              onInput={(e) => setComment(e.target.value)}
              type="text"
              placeholder="Some text..."
            />
          </div>
          <div>
            <input type="button" value="comment" onClick={addComment} />
          </div>
        </div>
        <div className="comments_section">
          <div style={{ textAlign: "left" }}>
            {commentsList?.map((item, index) => {
              return (
                <div>
                  <div className="">
                    <div className="flex_row">
                      <div className="comment_author">
                        <b>Author: </b> {item.author}
                      </div>
                      <div className="comment_date">
                        <b>Date: </b>
                        {item.date}
                      </div>
                    </div>
                    <div className="comment_text">
                      <b>Comment: </b>
                      {item.text}
                    </div>
                  </div>

                  <button onClick={removeComment}>Remove</button>
                  <br />
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </center>
  );
};

export default Comments;
