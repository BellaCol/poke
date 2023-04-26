
import Link from 'next/link'
import Image from 'next/image'
import Dessert from '../../public/dessert.jpg'

//      <Image src= '/dessert.jpg' width={400} height={400}/>

export default function Home() {
  return (
    <div>
      <p>Chanchito Feliz</p>
      <Link href= '/chanchitos'>Ir a Chanchitos</Link>
      <Image src={Dessert} width={400} height={400}/>
    </div>
  )
}
