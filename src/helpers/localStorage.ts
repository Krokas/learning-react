import { CONSTANTS } from "shared/constants";
import { TItem } from "types/Item";

const getLocalStorageNotes = (): TItem[] => {
  const items = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY);
  let itemArray: TItem[] = [];
  if (items) {
    itemArray = items
      .split(CONSTANTS.LOCAL_STORAGE_SEPARATOR)
      .map<TItem>((string) => JSON.parse(string));
  }

  return itemArray;
};

const addLocalStorageNote = (item: TItem) => {
  const items = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY);
  if (items) {
    localStorage.setItem(
      CONSTANTS.LOCAL_STORAGE_KEY,
      `${items}${CONSTANTS.LOCAL_STORAGE_SEPARATOR}${JSON.stringify(item)}`
    );
  } else {
    localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(item));
  }
};

const removeLocalStorageNote = (note: string): TItem[] => {
  const items: TItem[] = getLocalStorageNotes();
  const index: number = items.map((item) => item.note).indexOf(note);
  items.splice(index, 1);
  localStorage.setItem(
    CONSTANTS.LOCAL_STORAGE_KEY,
    items
      .map((item) => JSON.stringify(item))
      .join(CONSTANTS.LOCAL_STORAGE_SEPARATOR)
  );
  return items;
};

export { getLocalStorageNotes, addLocalStorageNote, removeLocalStorageNote };
