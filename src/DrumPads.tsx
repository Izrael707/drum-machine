import DrumPad from "./DrumPad";
import {
	playA,
	playC,
	playD,
	playE,
	playQ,
	playS,
	playW,
	playX,
	playZ,
} from "./assets/audioPlayFunctions";

let keyInfo: string = "";
window.addEventListener("keydown", (event: any) => {
	keyInfo = event.key;
	console.log(keyInfo);

	if (keyInfo === "q") playQ();
	if (keyInfo === "w") playW();
	if (keyInfo === "e") playE();
	if (keyInfo === "a") playA();
	if (keyInfo === "s") playS();
	if (keyInfo === "d") playD();
	if (keyInfo === "z") playZ();
	if (keyInfo === "x") playX();
	if (keyInfo === "c") playC();
});

const DrumPads = ({ setDt }: any) => {
	return (
		<div className="container d-flex flex-column justify-content-center p-2 h-100 w-100">
			<div className="d-flex gap-4 justify-content-center my-3">
				<DrumPad
					keyInfo={keyInfo}
					id="heater-1"
					audioId="Q"
					clickHandler={() => {
						playQ();
						setDt("Heater-1");
					}}
					audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
					text="Q"
				/>
				<DrumPad
					keyInfo={keyInfo}
					id="heater-2"
					audioId="W"
					clickHandler={() => {
						playW();
						setDt("Heater-2");
					}}
					audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
					text="W"
				/>
				<DrumPad
					keyInfo={keyInfo}
					id="heater-3"
					audioId="E"
					clickHandler={() => {
						playE();
						setDt("Heater-3");
					}}
					audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
					text="E"
				/>
			</div>
			<div className="d-flex gap-4 justify-content-center my-3">
				<DrumPad
					keyInfo={keyInfo}
					id="heater-4"
					audioId="A"
					clickHandler={() => {
						playA();
						setDt("Heater-4");
					}}
					audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
					text="A"
				/>
				<DrumPad
					keyInfo={keyInfo}
					id="clap"
					audioId="S"
					clickHandler={() => {
						playS();
						setDt("Clap");
					}}
					audioSource="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
					text="S"
				/>
				<DrumPad
					keyInfo={keyInfo}
					id="dscoh"
					audioId="D"
					clickHandler={() => {
						playD();
						setDt("Dsc-Oh");
					}}
					audioSource="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
					text="D"
				/>
			</div>
			<div className="d-flex gap-4 justify-content-center my-3">
				<DrumPad
					keyInfo={keyInfo}
					id="kick-n-hat"
					audioId="Z"
					clickHandler={() => {
						playZ();
						setDt("Kick-n'-hat");
					}}
					audioSource="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
					text="Z"
				/>
				<DrumPad
					keyInfo={keyInfo}
					id="kick"
					audioId="X"
					clickHandler={() => {
						playX();
						setDt("Kick");
					}}
					audioSource="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
					text="X"
				/>
				<DrumPad
					keyInfo={keyInfo}
					id="cev-h2"
					audioId="C"
					clickHandler={() => {
						playC();
						setDt("Cev-H2");
					}}
					audioSource="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
					text="C"
				/>
			</div>
		</div>
	);
};

export default DrumPads;
