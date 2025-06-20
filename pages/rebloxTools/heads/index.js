import Heads from '@containers/RebloxTools/Heads'
import Head from 'next/head'
import React, { Fragment } from 'react'

function heads() {
  return (
    <Fragment>
      <Head>
        <title>{"Robox Exclusive"}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"></script>
      </Head>
      <Heads />
    </Fragment>
  )
}

export default heads
