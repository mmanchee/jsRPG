export class Player {
  constructor(name, family, charClass) {
    this.name = name,
    this.family = family,
    this.charClass = charClass
  }
  addStats(stats) {
    this.stats = stats;

  }
  addSkills(skills) {
    this.skills = skills;
  }
}