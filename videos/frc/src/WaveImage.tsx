import React from 'react';
import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const WaveImage: React.FC<{ path: string, style: React.CSSProperties}> = ({ path, style }) => {
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

	return (
		<div>
			<Img src={staticFile(path)} style={{transform: `translateY(${wave1}px)`, ...style}} className="absolute" height={120} />
		</div>
	);
};
