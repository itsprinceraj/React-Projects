export const Loader = () => {
  return (
    <div className="d-flex justify-content-center loading">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    // <h1 className="loader">Loading...</h1>
  );
};
