import RbxPremium from '@containers/RbxExclusive/RbxPremium'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                               <title>{"Robox Exclusive"}</title>

            </Head>
            <RbxPremium />
        </Fragment>
    )
}

export default index
