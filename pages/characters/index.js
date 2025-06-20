import Characters from '@containers/Characters'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
<Fragment>
      <Head>
      <title>{"Robox Exclusive"}</title>

      </Head>
      <div

      >
        <Characters />
      </div>
    </Fragment>
    )
}

export default index
