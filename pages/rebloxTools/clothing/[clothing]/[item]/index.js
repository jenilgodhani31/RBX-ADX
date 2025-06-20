import ProductsDetails from '@containers/ProductsDetails'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                               <title>{"Robox Exclusive"}</title>

            </Head>
            <div>
                <ProductsDetails />
            </div>
        </Fragment>
    )
}

export default index
