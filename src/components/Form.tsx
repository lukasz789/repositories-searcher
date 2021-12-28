import { useRef, useContext, Fragment } from "react";
import { UserContext } from "../store/user-context";
import classes from "./Form.module.css";

const Form: React.FC = () => {
  console.log("FORM COMPONENT");
  const userInputRef = useRef<HTMLInputElement>(null);
  const { setUser } = useContext(UserContext);

  const formSubmissionHandler = (event: React.FormEvent) => {
    console.log("form submit");
    event.preventDefault();

    const enteredText = userInputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      //throw error HERE
      return;
    }

    setUser(enteredText);
  };

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
            ref={userInputRef}
          />
        </div>
        <div className={classes["button-wrap"]}>
          <button
            type="submit"
            className={`btn btn-primary btn-lg btn-block  ${classes.button}`}
          >
            Search
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
