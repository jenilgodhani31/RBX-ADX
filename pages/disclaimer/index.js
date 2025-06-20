import Disclaimer from '@containers/Disclaimer'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
        <Head>
        <title>{"Robox Exclusive"}</title>

        </Head>
        <Disclaimer />
    </Fragment>
    )
}

export default index
