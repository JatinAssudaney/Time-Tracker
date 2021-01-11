export const renderTags = (tags) => {
  return tags.map((tag, index) => {
    return (
      <span key={index} className="timer__tag">
        {tag}
      </span>
    );
  });
};
