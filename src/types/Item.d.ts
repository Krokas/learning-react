export type TItem = {
  note: string;
  dueDate?: Date;
  onRemoveItem?: (value: string) => void;
  onEditItem?: (item: TItem, index: number) => void;
};
