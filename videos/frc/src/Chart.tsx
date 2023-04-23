import React from 'react';
import {Img, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import Chart from "../public/chart.png"

export const ChartImage: React.FC = () => {
	const frame = useCurrentFrame();
	const {height, fps} = useVideoConfig();

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);

	const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;
	const wave2 = Math.cos((frame - 5) / 15) * 10 + entranceOffset;

	return (
		<div>
			<Img src={Chart} style={{transform: `translateY(${wave1}px)`, left: 10, top: 15}} className="absolute" />
		</div>
	);
};
