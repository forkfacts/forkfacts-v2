import { openDB, IDBPDatabase, DBSchema } from "idb";

interface MyDBV1 extends DBSchema {
  searches: { key: string; value: number };
  items: {
    value: {
      timestamp: Date;
      name: string;
      category: string;
    };
    key: string;
    indexes: { timestamp: Date };
  };
}

interface searchData {
  name: string;
  category: string;
  timestamp: Date;
}

const initDB = async () => {
  const db = await openDB<MyDBV1>("algolia-recent-searches", 2, {
    async upgrade(db) {
      // Cast a reference of the database to the old schema.
      const v1Db = db as any as IDBPDatabase<MyDBV1>;
      return v1Db
        .createObjectStore("items", {
          keyPath: "searchId",
          autoIncrement: true,
        })
        .createIndex("timestamp", "timestamp");
    },
  });

  return db;
};

const addSearchEntry = async (searchData: searchData) => {
  const db = await initDB();
  const tx = db.transaction("items", "readwrite");
  const store = tx.objectStore("items");

  // delete oldest entry if the store already has 5 entries
  const count = await store.count();
  if (count >= 5) {
    const oldestEntry = await store.index("timestamp").openCursor();
    if (oldestEntry) {
      await store.delete(oldestEntry.value.name);
    }
  }
  await store.add(searchData);
  await tx.done;
};
