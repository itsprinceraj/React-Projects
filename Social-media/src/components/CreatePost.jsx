import { useContext, useRef } from "react";
import { PostConstruct } from "../store/Postprovider";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const navigate = useNavigate();

  const userIdElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();

  const { addPost } = useContext(PostConstruct);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // removing values from input field , after the value has been read

    userIdElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    //  calling addPost function by firing onSubmit button
    navigate("/");

    addPost(userId, title, content, reactions, tags);
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            placeholder="Enter user id..."
            id="userId"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={titleElement}
            placeholder="How are you feeling today?"
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            required
            ref={contentElement}
            rows="3"
            placeholder="Tell us more about it..."
            className="form-control"
            id="content"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Reaction Count
          </label>
          <input
            type="number"
            ref={reactionsElement}
            placeholder="How many people reacted to this post?"
            className="form-control"
            id="reaction"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            #hashtags
          </label>
          <input
            type="text"
            ref={tagsElement}
            placeholder="Use trending tags in your post using space..."
            className="form-control"
            id="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
