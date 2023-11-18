import { useState } from "react";
import DrumPads from "./DrumPads";

const App = () => {
	const [displayText, setDisplayText] = useState<string>("");
	return (
		<div
			className="container-fluid p-0 d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<div id="drum-machine" className="border p-3">
				<DrumPads setDt={setDisplayText} />
				<div
					id="display"
					className="bg-secondary py-1"
					style={{ width: "100%", height: "3rem" }}
				>
					<h2 className="text-center m-0">{displayText}</h2>
				</div>
			</div>
		</div>
	);
};

export default App;
