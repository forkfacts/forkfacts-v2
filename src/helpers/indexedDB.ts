import { openDB, IDBPDatabase, DBSchema } from "idb";

interface DBData extends DBSchema {
  searches: { key: string; value: number };
  items: {
    value: {
      timestamp: Date;
      name: string;
      category: string;
      searchLocation: string;
    };
    key: string;
    indexes: { timestamp: Date };
  };
}

export interface SearchParams {
  name: string;
  category: string;
  timestamp: Date;
  searchLocation: string;
}

const initDB = async () => {
  const db = await openDB<DBData>("algolia-recent-searches", 1.0, {
    async upgrade(db) {
      try {
        const v1Db = db as any as IDBPDatabase<DBData>;
        return v1Db
          .createObjectStore("items", {
            keyPath: "searchId",
            autoIncrement: true,
          })
          .createIndex("timestamp", "timestamp");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return db;
};

export const addSearchEntry = async (searchData: SearchParams) => {
  try {
    const db = await initDB();
    const tx = db.transaction("items", "readwrite");
    const store = tx.objectStore("items");
    const count = await store.count();
    if (count >= 5) {
      const oldestEntry = await store.index("timestamp").openCursor();
      if (oldestEntry) {
        await store.delete(oldestEntry.value.name);
      }
    }
    await store.add(searchData);
    await tx.done;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRecentSearches = async (): Promise<SearchParams[]> => {
  try {
    const db = await initDB();
    const tx = db.transaction("items", "readonly");
    const store = tx.objectStore("items");
    const result = await store.getAll();
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const clearRecentDb = async () => {
  const db = await initDB();
  const tx = db.transaction("items", "readwrite");
  const store = tx.objectStore("items");
  await store.clear();
  await tx.done;
};
