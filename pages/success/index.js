import Success from '@containers/success'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
  return (
    <Fragment>
      <Head>
      <title>{"Robox Exclusive"}</title>

      </Head>
      <Success />
    </Fragment>
  )
}

export default index