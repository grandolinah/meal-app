export interface CustomIconButtonInterface {
  onPressed(): void;
  icon: string;
}

export interface DefaultTextInterface {
  style?: any;
  children?: any;
  numberOfLines?: number;
}

export interface FilterSwitchInterface {
  title: string;
  value: boolean;
  onValueChange(value: boolean): void;
}
