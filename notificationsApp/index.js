const Notification = (props) => {
  const { className, iconUrl, message } = props;
  return (
    <div className={className}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="bg-conatiner">
    <h1 class="main-heading">Notifications</h1>
    <div>
      <Notification
        className="information-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="error-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
