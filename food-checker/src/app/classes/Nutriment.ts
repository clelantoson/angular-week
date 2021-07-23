export class Nutriment {
	carbohydrates_100g: number;
	energy: number;
	fat_100g: number;
	fiber_100g: number;

  constructor(
    carbohydrates_100g: number,
    energy: number,
    fat_100g: number,
    fiber_100g: number,
    proteins_100g: number
) {
    this.carbohydrates_100g = carbohydrates_100g
    this.energy = energy
    this.fat_100g = fat_100g
    this.fiber_100g = fiber_100g
    this.proteins_100g = proteins_100g
  }
	proteins_100g: number;
}
