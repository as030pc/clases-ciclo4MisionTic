import type { NextPage } from 'next'


import Link from 'next/link'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div>
    <Head>
      <title>
        Home | Gestion de proyectos
      </title>

    </Head>
      <p className = "bg-blue-500"> Pagina principal</p>
      <Link href = "admin/usuarios">
        <a className = "cursor-pointer"> Ir a admin de usuarios</a>
      </Link>
    </div>
  )
}

export default Home
