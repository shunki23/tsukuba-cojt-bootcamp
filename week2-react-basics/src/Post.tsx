import { useState } from "react";

const Post = (props) => {

  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div>
      <input type="text" />
      <button onClick={() => setIsEmpty(false)}>投稿</button>
      {/* { !isEmpty && } */}
    </div>
  );
}

export default Post