import { CONSTANTS } from "shared/constants";

const getLocalStorageNotes = (): string[] => {
  const notes = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY);
  let noteArray: string[] = [];
  if (notes) {
    noteArray = notes.split(CONSTANTS.LOCAL_STORAGE_SEPARATOR);
  }

  return noteArray;
};

const addLocalStorageNote = (note: string) => {
  const notes = localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY);
  if (notes) {
    localStorage.setItem(
      CONSTANTS.LOCAL_STORAGE_KEY,
      `${notes}${CONSTANTS.LOCAL_STORAGE_SEPARATOR}${note}`
    );
  } else {
    localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, note);
  }
};

const removeLocalStorageNote = (note: string): string[] => {
  const notes: string[] = getLocalStorageNotes();
  const index: number = notes.indexOf(note);
  notes.splice(index, 1);
  localStorage.setItem(
    CONSTANTS.LOCAL_STORAGE_KEY,
    notes.join(CONSTANTS.LOCAL_STORAGE_SEPARATOR)
  );
  return notes;
};

export { getLocalStorageNotes, addLocalStorageNote, removeLocalStorageNote };
