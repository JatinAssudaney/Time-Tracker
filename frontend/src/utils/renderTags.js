export const renderTags = (tags) => {
  return tags.map(({ topicName }, index) => {
    return (
      <span key={index} className="timer__tag">
        {topicName}
      </span>
    );
  });
};
