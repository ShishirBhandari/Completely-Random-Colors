// Completely Random Color

const HEX_VALUES = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F'
];

const BASE = 16;


const getRandomColor = () => {
	let color = '';
	for (var i = 6 - 1; i >= 0; i--) {
		const randomHexValue = Math.floor(Math.random() * BASE);

		color += HEX_VALUES[randomHexValue];
	}

	return ('#' + color);
}

exports.getRandomColor = getRandomColor;