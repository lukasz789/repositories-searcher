import ReactPaginate from "react-paginate";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/user-context";
import axios from "axios";
import classes from "./Repositories.module.css";
import RepositoryItem from "./RepositoryItem";

const Repositories: React.FC = () => {
  console.log("REPOSITORIES COMPONENT");
  const { user } = useContext(UserContext);
  const [repos, setRepos] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);

  console.log(currentPage);
  console.log(user);
  useEffect(() => {
    if (user) {
      console.log("fetch new user");
      const getRepos = async () => {
        try {
          const response = await axios.get(
            `https://api.github.com/search/repositories?q=user:${user}&sort=stars&order=desc&per_page=12&page=${currentPage}`
          );
          const data = await response.data;
          setPageCount(Math.ceil(data.total_count / 12));
          setRepos(data.items);
        } catch (error) {
          let errorMessage = "Failed to do something exceptional";
          if (error instanceof Error) {
            errorMessage = error.message;
          }
          console.log(errorMessage);
        }
      };
      getRepos();
    }
  }, [user, currentPage]);

  const repositories = repos.map((item) => {
    return (
      <RepositoryItem
        key={item.id}
        html_url={item.html_url}
        name={item.name}
        stargazers_count={item.stargazers_count}
      />
    );
  });

  const handlePageClick = (data: { selected: number }) => {
    console.log("zmiana page");
    setCurrentPage(data.selected + 1);
  };

  return (
    <div className={classes["table-wrap"]}>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Stars</th>
          </tr>
        </thead>
        <tbody>{repositories}</tbody>
      </table>
      <ReactPaginate
        pageCount={pageCount}
        nextLabel={">"}
        previousLabel={"<"}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default Repositories;