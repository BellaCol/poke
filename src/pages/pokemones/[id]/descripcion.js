import { useRouter } from "next/router"

const Descripcion = () =>{

	const router = useRouter()
		console.log({router})
		return(
		<div>
			<p>
				Soy descripcion
			</p>
		</div>
		)
}

export default Descripcion