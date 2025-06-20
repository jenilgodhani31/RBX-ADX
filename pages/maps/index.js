import Maps from '@containers/Maps'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                               <title>{"Robox Exclusive"}</title>

            </Head>
            <Maps />
        </Fragment>
    )
}

export default index
