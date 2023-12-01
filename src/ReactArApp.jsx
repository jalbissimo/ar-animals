import React, { useEffect, useState } from "react";
import { AFrameRenderer, Marker } from "react-web-ar";

export default function ReactArApp() {
	const [increment, setIncrement] = useState(0);

	var i = 0;
	useEffect(() => {
		const interval = setInterval(() => {
			setIncrement(i++);
		}, 10);
		return () => clearInterval(interval);
	}, [i]);
	return (
		<AFrameRenderer inherent={true}>
			<Marker
				parameters={{
					preset: "pattern",
					type: "pattern",
					patternUrl: "https://raw.githubusercontent.com/jalbissimo/ar-animals/master/src/assets/pattern-fox.patt",
					url: "https://raw.githubusercontent.com/jalbissimo/ar-animals/master/src/assets/pattern-fox.patt",
				}}
			>
				<a-gltf-model src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Fox/glTF/Fox.gltf" rotation={"0 0" + increment} scale="0.01 0.01 0.01"></a-gltf-model>
			</Marker>
			<Marker
				parameters={{
					preset: "pattern",
					type: "pattern",
					patternUrl: "https://raw.githubusercontent.com/jalbissimo/ar-animals/master/src/assets/pattern-duck.patt",
					url: "https://raw.githubusercontent.com/jalbissimo/ar-animals/master/src/assets/pattern-duck.patt",
				}}
			>
				<a-entity>
					<a-gltf-model src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf" rotation={"0 0" + increment} scale="1 1 1"></a-gltf-model>
				</a-entity>
			</Marker>
		</AFrameRenderer>
	);
}
