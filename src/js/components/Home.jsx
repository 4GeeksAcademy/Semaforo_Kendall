import React, { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("yellow")

	const colors = [
		"red",
		"yellow",
		"green"
	]

	function getColorBg (item) {
		if (item == "red"){
			return "bg-danger"
		} 
		if (item == "yellow") {
			return "bg-warning"
		}
		if (item == "green") {
			return "bg-success"
		}
	}

	function isColorActive (item) {
		if (item == "red" && item == color){
			return " turn-on-red"
		} 
		if (item == "yellow" && item == color) {
			return " turn-on-yellow"
		}
		if (item == "green" && item == color) {
			return " turn-on-green"
		}
		return ""
	}
	
	
	return (
		<div className="d-flex flex-column align-items-center">
			<div className="bg-dark p-2" style={{width: '5px', height: '40px'}}></div>
            <div className="d-inline-flex bg-dark">
				<div className="d-flex flex-column align-items-center gap-2 p-2 ">
					{
						colors.map((item)=> {
							return <div key={item} 
							className={ "col-4 rounded-4 p-3 "+ getColorBg(item) + isColorActive(item) }
							onClick={() => setColor(item)}
							></div>
						})
					}
					
				</div>
			</div>

		</div>
	);
};

export default Home;