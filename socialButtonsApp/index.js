const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <div className="content-container">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="button-container">
        <Button className="like-button" buttonText="Like" />
        <Button className="comment-button" buttonText="Comment" />
        <Button className="share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
