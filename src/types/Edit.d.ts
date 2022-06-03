export type TEdit = {
  isOpen: boolean;
  item: TItem;
  index: number;
  onEdit?: (item: TItem, index: number) => void;
  onCloseEdit: () => void;
};
