import { openDB, IDBPDatabase, DBSchema } from "idb";

interface DBData extends DBSchema {
  searches: { key: string; value: number };
  items: {
    value: {
      timestamp: Date;
      name: string;
      hap_name: string;
      category: string;
      searchLocation: string;
      searchId?: string;
    };
    key: string;
    indexes: { timestamp: Date };
  };
}

export interface SearchParams {
  name: string;
  hap_name: string;
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
    const allItems = await store.getAll();
    const existingItem = allItems.find((item) => item.name === searchData.name);
    if (existingItem) return;
    allItems.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    if (allItems.length >= 5) {
      const lastItem = allItems[allItems.length - 1];
      if (lastItem.searchId) {
        await store.delete(lastItem.searchId);
      }
    }
    await store.add(searchData);
    const recentSearches = await store.getAll();
    recentSearches.sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
    await tx.done;
    return recentSearches.slice(0, 5);
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
