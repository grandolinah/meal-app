export interface MealItemPropsInterface {
  onSelectMeal(): void;
  data: any; // TODO interface
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
