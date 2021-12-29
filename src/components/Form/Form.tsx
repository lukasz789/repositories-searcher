import { useState, useContext, Fragment } from "react";
import { UserContext } from "../../store/user-context";
import classes from "./Form.module.css";

const Form: React.FC = () => {
  const { setUser, user } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");

  const formSubmissionHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setUser(userInput);
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const btnAdditionalStyling = userInput ? "" : "disabled";

  return (
    <Fragment>
      <h1 className={classes.caption}>
        Find the most popular repositories by a user!
      </h1>
      <form onSubmit={formSubmissionHandler}>
        <div className={`col-sm-10 ${classes["input-wrap"]}`}>
          <input
            type="text"
            className={`form-control form-control-lg ${classes.input}`}
            placeholder="Write username"
            value={userInput}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={classes["button-wrap"]}>
          <button
            type="submit"
            className={`btn btn-primary btn-lg btn-block  ${classes.button} ${btnAdditionalStyling}`}
          >
            Search
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
