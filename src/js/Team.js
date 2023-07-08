import Character from './Character';

export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    if (character instanceof Character) {
      this.characters.push(character);
    } else {
      throw new Error('Можно добавлять только объекты типа Character');
    }
  }

  * [Symbol.iterator]() {
    for (const character of this.characters) {
      yield character;
    }
  }
}
