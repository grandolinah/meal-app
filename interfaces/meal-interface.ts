export interface MealItemPropsInterface {
  onSelectMeal(): void;
  data: any;
  image: string;
  title: string;
  duration: string;
  complexity: string;
  affordability: string;
  id?: string;
}

export interface MealItemDataInterface {
  index: number;
  item: MealItemInterface;
}

export interface MealItemInterface {
  image: string;
  title: string;
  duration: string;
  complexity: string;
  affordability: string;
}

export interface MealInterface {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

export interface MealListInterface {
  navigation: any;
  list: MealInterface[];
}
