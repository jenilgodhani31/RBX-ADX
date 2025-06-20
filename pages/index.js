import Head from "next/head";
import { Fragment } from "react";
import Home from "../containers/home";

export default function Homepage() {
  return (
    <Fragment>
      <Head>
        <title>{"Robox Exclusive"}</title>

      </Head>
      <div

      >
        <Home />
      </div>
    </Fragment>
  );
}
