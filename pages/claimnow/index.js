import ClaimNow from '@containers/ClaimNow'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>

                <title>{"Robox Exclusive"}</title>

            </Head>
            <ClaimNow />
        </Fragment>
    )
}

export default index
