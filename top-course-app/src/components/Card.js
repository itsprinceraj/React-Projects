import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
export const Card = (props) => {
  // extract cource details
  let course = props.course;
  let likedCourse = props.likedCourse;
  let setLikedCourse = props.setLikedCourse;

  // show substring of description
  let description = `${course.description.substring(0, 100)}...`;

  // like handler
  function likeHandler() {
    if (likedCourse.includes(course.id)) {
      // if course is liked then remove like
      setLikedCourse((prev) => prev.filter((prevId) => prevId !== course.id));
      toast.warning("Like Removed");
    } else {
      //not liked then add like
      if (likedCourse.length === 0) {
        setLikedCourse([course.id]); // course id key
      } else {
        setLikedCourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  console.log(likedCourse);

  return (
    <div className="card-container">
      <div className="img-container">
        <img className="image" src={course.image.url} alt="" />
      </div>

      <div className="button">
        <button className="like-button" onClick={likeHandler}>
          {likedCourse.includes(course.id) ? <FcLike /> : <FcLikePlaceholder />}
        </button>
      </div>

      <div className="description-box">
        <h2 className="title">{course.title}</h2>
        <p className="description">
          {course.description.length > 100 ? description : course.description}
        </p>
      </div>
    </div>
  );
};
