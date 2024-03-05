import { useNavigate } from "react-router-dom";
import { format } from "date-fns"; 
import { useStoreActions, useStoreState } from "easy-peasy";

const NewPost = () => {
  const navigate = useNavigate();

  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);


  const handleSubmit =  (e) => {
    e.preventDefault();
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");

    const newPost = { id: id.toString(), title: postTitle, datetime, body: postBody };
    savePost(newPost);
    navigate('/');
  
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          cols="30"
          rows="10"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        ></textarea>
        <button type="submit" >Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
