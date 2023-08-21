import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../header/navbar";
import PageContentContainer from "../pagecontent/container";
import data from "./apidata";

const Container = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [filter, setFilter] = useState({
    grouping: "status",
    ordering: "priority",
  });

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setApiData(data.tickets);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, [filter]);

  if (!isLoading) {
    const sortAccToGrouping = () => {
      if (filter.grouping === "status") {
        let backlog = [];
        let todo = [];
        let inProgress = [];
        let done = [];
        let canceled = [];

        for (let index = 0; index < apiData.length; index++) {
          let elementStatus = apiData[index].status;
          switch (elementStatus) {
            case "Backlog":
              backlog.push(apiData[index]);
              break;
            case "Todo":
              todo.push(apiData[index]);
              break;
            case "In progress":
              inProgress.push(apiData[index]);
              break;
            case "Done":
              done.push(apiData[index]);
              break;
            case "Canceled":
              canceled.push(apiData[index]);
              break;
          }
        }

        return {
          Backlog: backlog,
          Todo: todo,
          InProgress: inProgress,
          Done: done,
          Canceled: canceled,
        };
      } else if (filter.grouping === "user") {
      } else if (filter.grouping === "priority") {
      }
    };
    return (
      <>
        <Navbar filter={filter} setFilter={setFilter}></Navbar>
        <PageContentContainer data={sortAccToGrouping}></PageContentContainer>
      </>
    );
  }
};

export default Container;
