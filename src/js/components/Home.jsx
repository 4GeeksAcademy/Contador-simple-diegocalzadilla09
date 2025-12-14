import React, { useEffect, useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
	const [unidad, setUnidad] = useState(0) //función con 2 variables una es número y la otra el cambio del número useState inicializa el contador
	const [decena, setDecena] = useState(0)
	const [centena, setCentena] = useState(0)
	const [millar, setMillar] = useState(0)
	const aumentarUnidad = () => {

		//setUnidad(numero+1) 
		setUnidad((previusNumber) => previusNumber + 1)
	}
	useEffect(() => {
		if (unidad === 10) {
			setDecena((previusDecena) => previusDecena + 1)
			setUnidad(0)
		}

	}, [unidad])

	useEffect(() => {
		if (decena === 10) {
			setCentena((previusCentena) => previusCentena + 1)
			setDecena(0)
		}

	}, [decena])

	useEffect(() => {
		if (centena === 10) {
			setMillar((previusMillar) => previusMillar + 1)
			setCentena(0)
		}

	}, [centena])

	useEffect(() => {
		let intervalo = setInterval(aumentarUnidad, 500)
		return () => clearInterval(intervalo)

	}, [])

	const reiniciarContador = () => {
		setUnidad(0)
		setDecena(0)
		setCentena(0)
		setMillar(0)

	}


	return (
		<div className="text-center">
			<div className="d-flex justify-content-center p-3 mb-2 bg-black text-white">
				<i className="card-number-1 display-1 fa-solid fa-clock"></i>
				<div className="card-number display-1">
					<p>{millar}</p>
				</div>
				<div className="card-number display-1">
					<p>{centena}</p>
				</div>
				<div className="card-number display-1">
					<p>{decena}</p>
				</div>
				<div className="card-number display-1">
					<p>{unidad}</p>
				</div>

			</div>
			<button className="btn btn-primary" onClick={reiniciarContador}>RESET</button>
		</div>

	);
};

export default Home;