import {staticFile} from 'remotion'
import {Audio} from 'remotion'
import {Sequence} from 'remotion'
import {AbsoluteFill} from 'remotion';
import {Logo} from './Logo';
import {ChartImage} from "./Chart"
import { WaveImage } from './WaveImage';

export const MyComposition = () => {
	// Audio length one
	const s1Length = 30 * 14.5;
	const s2Length = 30 * 14.5;
	const s5Length = 30 * 9;
	return (
		<>
		<Sequence durationInFrames={s1Length}>
			<AbsoluteFill className="bg-gray-100 items-center justify-center">
				<Logo />
				<Audio src={staticFile("_0_audio.wav")} />
			</AbsoluteFill>
		</Sequence>
		<Sequence durationInFrames={s2Length} from={s1Length}>
			<AbsoluteFill className="bg-gray-100 items-center justify-center">
				<ChartImage />
				<Audio src={staticFile("_1_audio.wav")} />
			</AbsoluteFill>
		</Sequence>
		<Sequence durationInFrames={s2Length} from={s1Length+s2Length}>
			<AbsoluteFill className="bg-gray-100 items-center justify-center">
				<Logo />
				<Audio src={staticFile("_2_audio.wav")} />
			</AbsoluteFill>
		</Sequence>
		<Sequence durationInFrames={s2Length} from={s1Length+2*s2Length}>
			<AbsoluteFill className="bg-gray-100 items-center justify-center">
				<WaveImage path="wal.png" style={{
					left: 15,
					top: 10,
				}}/>
				<Audio src={staticFile("_3_audio.wav")} />
			</AbsoluteFill>
		</Sequence>
		<Sequence durationInFrames={s2Length} from={s1Length+3*s2Length}>
			<AbsoluteFill className="bg-gray-100 items-center justify-center">
				<WaveImage path="fredgraph.png" style={{
					left: 15,
					top: 10,
				}}/>
				<Audio src={staticFile("_4_audio.wav")} />
			</AbsoluteFill>
		</Sequence>
		<Sequence durationInFrames={s5Length} from={s1Length+4*s2Length}>
			<AbsoluteFill className="bg-gray-100 items-center justify-center">
				<Logo />
				<Audio src={staticFile("_5_audio.wav")} />
			</AbsoluteFill>
		</Sequence>
		<Sequence durationInFrames={s2Length} from={s1Length+4*s2Length+s5Length}>
			<AbsoluteFill className="bg-gray-100 items-center justify-center">
				<Logo />
				<Audio src={staticFile("_6_audio.wav")} />
			</AbsoluteFill>
		</Sequence>
	</>
	);
};
