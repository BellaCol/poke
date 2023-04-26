import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Pokemon = ({data})=>{

const router = useRouter()

if(router.isFallBack){
  return 
    <p> cargando...</p>
  
}
  
  return(
    <div>
    <h1>{data.name} número # {data.id}</h1>
    <Image src={data.sprites.front_default} width={400} height={400}/>
    <Link href={"/"}>Ir al inicio</Link>
    </div>
    )
}


export default Pokemon

export const getStaticProps = async ({params})=>{
  const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id} `)
  const data = await response.json()
  return{
    props: {data}
  }
}

export const getStaticPaths = async ()=>{
  const paths= [
    {params: {id:'1'}},
    {params: {id:'2'}}
]
  return{
    paths:paths,
    fallback: true//se puede colocar fallBack: 'blocking' o false, si tenemos pocas imagenes para renderizar
  }
}

// export const getServerSideProps = async ({params})=>{
//   const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id} `)
//   const data = await response.json()
//   return{
//     props: {data}
//   }
// }
