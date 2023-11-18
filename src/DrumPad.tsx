import { MouseEventHandler } from "react";

type PropType = {
	keyInfo: string;
	id: string;
	audioId: string;
	clickHandler: MouseEventHandler;
	audioSource: string;
	text: string;
};

const DrumPad = (props: PropType) => {
	return (
		<div
			id={props.id}
			onClick={props.clickHandler}
			className="drum-pad d-flex justify-content-center align-items-center p-4 bg-primary"
		>
			<audio id={props.audioId} src={props.audioSource}></audio>
			<span className="pads">{props.text}</span>
		</div>
	);
};

export default DrumPad;
