import Clothing from '@containers/RebloxTools/Clothing'
import Head from 'next/head'
import React, { Fragment } from 'react'

function clothing() {
  return (
    <Fragment>
      <Head>
      <title>{"Robox Exclusive"}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"></script>
      </Head>
      <Clothing />
    </Fragment>
  )
}

export default clothing
