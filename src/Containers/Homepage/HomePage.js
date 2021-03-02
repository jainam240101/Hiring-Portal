/** @format */

import Page from "../../HOC/Page";
import React from "react";
import { useQuery } from "@apollo/client";
import { Hello } from "./Queries";

const HomePage = () => {
  const { loading, data, error } = useQuery(Hello);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return <Page>Hello</Page>;
};

export default HomePage;
