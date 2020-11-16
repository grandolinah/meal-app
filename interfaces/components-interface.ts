export interface CustomIconButtonInterface {
  onPressed(): void;
  icon: string;
}

export interface DefaultTextInterface {
  style?: any;
  children?: any;
}

export interface FilterSwitchInterface {
  title: string;
  value: boolean;
  onValueChange(value: boolean): void;
}