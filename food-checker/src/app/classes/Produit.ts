import { Nutriment } from "./Nutriment";

export class Produit {
	image_front_url: string;
	nutrition_grade_fr: string;
	nutriments: Nutriment
	generic_name_fr: string;
	product_name_fr: string;
	id: number;

  constructor(
    image_front_url: string,
    nutrition_grade_fr: string,
    nutriments: Nutriment,
    generic_name_fr: string,
    product_name_fr: string,
	id: number
) {
    this.image_front_url = image_front_url
    this.nutrition_grade_fr = nutrition_grade_fr
    this.nutriments = nutriments
    this.generic_name_fr = generic_name_fr
    this.product_name_fr = product_name_fr
	this.id = id
  }

}
