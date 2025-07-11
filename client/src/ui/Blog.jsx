import styles from "../styles/Particularblog.module.css";
import stylesall from "../styles/Allblogs.module.css";
import downvote_icon from "../assets/downvote_icon.png";
import upvote_icon from "../assets/upvote_icon.png";
import { useState } from "react";

function Blog({ blog, index }) {
  // console.log(blog)
  const [votecount, setVotecount] = useState(0);
  return (
    <div>
      <li
        className={`${styles.blogcontainer} ${stylesall.blogitem}`}
        key={index}
      >
        <div className={styles.header}>
          <p className={styles.title}>{blog.title}</p>
          <p className={styles.whopostedtime}>
            By {blog.whoposted}, {blog.time}
          </p>
        </div>
        <div className={styles.blogtext}>
          <p>{blog.text}</p>
        </div>
        
      </li>
    </div>
  );
}

export default Blog;
