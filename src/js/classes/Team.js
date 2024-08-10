export default class Team {
	constructor() {
		this.members = new Set();
	}

	*[Symbol.iterator]() {

		const members = this.toArray();

		for (let index = 0; index < members.length; index += 1) {
			yield members[index];
		}
	}

	add(characher) {
		if (this.members.has(characher)) {
			throw new Error('Character is already in the team');
		}

		return this.members.add(characher);
	}

	addAll(...characters) {
		characters.forEach((character) => {
			if (!this.members.has(character)) {
				this.members.add(character);
			}
		});

		return this.members;
	}

	toArray() {
		return [...this.members];
	}
}