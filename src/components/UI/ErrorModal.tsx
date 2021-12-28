import classes from "./ErrorModal.module.css";

const ErrorModal: React.FC<{
  errorMessage: string;
}> = (props) => {
  return (
    <div className={`alert alert-danger ${classes.error}`} role="alert">
      {props.errorMessage}, please wait a moment, refresh page and try again
      soon.
      {props.errorMessage === "Request failed with status code 403"
        ? " This usually indicates that user is searching for new repositories too often."
        : null}
    </div>
  );
};

export default ErrorModal;
