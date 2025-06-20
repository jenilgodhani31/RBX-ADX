import Details from '@containers/details'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                               <title>{"Robox Exclusive"}</title>

            </Head>
            <Details />
        </Fragment>
    )
}

export default index
