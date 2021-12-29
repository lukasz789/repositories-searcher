import classes from "./RepositoryItem.module.css";

const RepositoryItem: React.FC<{
  html_url: string;
  name: string;
  stargazers_count: number;
}> = (props) => {
  return (
    <tr className={classes.tablerow} role="row">
      <th>
        <a href={props.html_url} target="_blank">
          {props.name}
        </a>
      </th>
      <th>&#9734;{props.stargazers_count}</th>
    </tr>
  );
};

export default RepositoryItem;
