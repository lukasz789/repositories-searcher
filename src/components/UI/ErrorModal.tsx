import classes from "./ErrorModal.module.css";

const ErrorModal: React.FC<{
  errorMessage: string | number;
}> = (props) => {
  let message: string;

  switch (props.errorMessage) {
    case 403:
      message =
        "You are searching for new repositories too fast, please wait a minute.";
      break;
    case 422:
      message = "Specified user does not exist.";
      break;
    default:
      message = "Something went wrong, please try again in a moment.";
  }

  return (
    <div className={`alert alert-danger ${classes.error}`} role="alert">
      {message}
    </div>
  );
};

export default ErrorModal;
