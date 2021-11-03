import type { NextPage } from 'next'


import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <p className = "bg-blue-500"> Pagina principal</p>
      <Link href = "admin/usuarios">
        <a className = "cursor-pointer"> Ir a admin de usuarios</a>
      </Link>
    </div>
  )
}

export default Home
