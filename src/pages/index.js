import Link from 'next/link'

const Pokemon =({pokemon})=>{
  const id= pokemon.url.split('/').filter(x=>x).pop()
  return (
    <li> <Link href={`/pokemoness/${id}`}>{pokemon.name}</Link> </li>
  )
}

export default function Pokemones({pokemones}) {

  console.log(pokemones)
  return (
    <div>
      <h1>Mi APP de Pokemones</h1>
      <br/>
        <ul>
          {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
        </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const response= await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
  const data= await response.json()
  return{
    props: {pokemones: data.results}
  }
}
