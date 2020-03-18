import React from "react";
import Comment from "./Comment";

import "./Comments.scss";

// so far so good. It's getting the searchTerm
// Now, i have to figured out how to render articles based on search Term
// And <mark></mark> them (highlight the word from search)
// is <mark></mark> the whole title who is matching
// but im ok with that :D

class Comments extends React.Component {

  render() {
    return this.props.comments.map(comm => {
      if (comm.text.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1 && this.props.searchTerm.length) {
        return (
          <Comment
            key={comm.id}
            text={<mark>{comm.text}</mark>}
            points={comm.points}
            user={comm.user}
            date={comm.date}
          />
        );
      }
      if (!this.props.searchTerm.length) {
        return (
          <Comment
            key={comm.id}
            text={comm.text}
            points={comm.points}
            user={comm.user}
            date={comm.date}
          />
        );
      }
      return null;
    });
  }
}

export default Comments;
