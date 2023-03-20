import React from "react";
import AddField from "../components/AddField";
import DataList from "../components/DataList";
import MainStep from "../components/MainStep";
import StepComp from "../components/StepComp";
import Stepone from "../components/Stepone";
import Stepthree from "../components/Stepthree";
import Steptwo from "../components/Steptwo";

const routes = [
  {
    path: "/",
    component: <MainStep />,
    exact: true,
  },
  {
    path: "/datalist",
    component: <DataList />,
    exact: true,
  },
  {
    path: "/addfield",
    component: <AddField />,
    exact: true,
  },
  {
    path: "/stepcomp",
    component: <StepComp />,
    exact: true,
  },
  {
    path: "/stepone",
    component: <Stepone />,
    exact: true,
  },
  {
    path: "/steptwo",
    component: <Steptwo />,
    exact: true,
  },
  {
    path: "/stepthree",
    component: <Stepthree />,
    exact: true,
  },
];

export default routes;
