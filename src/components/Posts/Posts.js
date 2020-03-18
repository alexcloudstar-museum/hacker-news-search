import React from "react";
import Post from "./Post";

import "./Posts.scss";

// so far so good. It's getting the searchTerm
// Now, i have to figured out how to render articles based on search Term
// And <mark></mark> them (highlight the word from search)
// is <mark></mark> the whole title who is matching
// but im ok with that :D

class Posts extends React.Component {

  render() {
    return this.props.posts.map(post => {
      if (
        post.title
          .toLowerCase()
          .indexOf(this.props.searchTerm.toLowerCase()) > -1 &&
        this.props.searchTerm.length
      ) {
        return (
          <Post
            key={post.id}
            title={<mark>{post.title}</mark>}
            url={post.url}
            points={post.points}
            user={post.user}
            date={post.date}
            comments={post.comments}
          />
        );
      }
      if (!this.props.searchTerm.length) {
        return (
          <Post
            key={post.id}
            title={post.title}
            url={post.url}
            points={post.points}
            user={post.user}
            date={post.date}
            comments={post.comments}
          />
        );
      }
      return null;
    });
  }
}

export default Posts;
