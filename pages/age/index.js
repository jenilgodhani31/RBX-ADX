import Age from '@containers/Age'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                <title>{"Robox Exclusive"}</title>

            </Head>
            <div>
                <Age />
            </div>
        </Fragment>
    )
}

export default index
