// @flow

const possibleValues = ['x', 'o', null];

export const getRandomValue = (): CellValueT  => {
	return possibleValues[Math.round(Math.random()*10000) % possibleValues.length];
}

export const getStartField = (): CellT[] => {
	let field = [];

	for(let id = 0; id < 9; id++) {
		field.push({
			id: id,
			value: getRandomValue()
		});
	}

	return field;
};
