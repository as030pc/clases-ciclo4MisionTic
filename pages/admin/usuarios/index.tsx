import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const index = () => {
    return (
        <div>
            <Head>
                <title>
                    Pagina de usuarios
                </title>

            </Head>
            <div>Pagina de admin de usuarios</div>
            <Link href="/"> Home </Link>

        </div>

    )
}

export default index
