import MaturityLevel from '@containers/MaturityLevel'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                               <title>{"Robox Exclusive"}</title>

            </Head>
            <MaturityLevel />
        </Fragment>
    )
}

export default index
