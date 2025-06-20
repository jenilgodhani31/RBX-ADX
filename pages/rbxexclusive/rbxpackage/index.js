import RbxPackage from '@containers/RbxExclusive/RbxPackage'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                               <title>{"Robox Exclusive"}</title>

            </Head>
            <RbxPackage />
        </Fragment>
    )
}

export default index
