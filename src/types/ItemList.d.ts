export type TItemList = {
  items: TItem[];
  onRemoveItem?: (item: string) => void;
  onEditItem?: (item: TItem, index: number) => void;
};
