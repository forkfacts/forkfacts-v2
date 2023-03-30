import { openDB, IDBPDatabase } from "idb";

interface IndexDBData {
  category: string;
  name: string;
  timestamp: Date;
}

const initDB = async () => {
  const db = await openDB("my-db", 1, (upgradeDB: IDBPDatabase) => {
    upgradeDB
      .createObjectStore("searches", {
        keyPath: "id",
        autoIncrement: true,
      })
      .createIndex("timestamp", "timestamp");
  });
  return db;
};

const addSearchEntry = async (searchData: IndexDBData) => {
  const db = await initDB();
  const tx = db.transaction("searches", "readwrite");
  const store = tx.objectStore("searches");
  const count = await store.count();
  if (count >= 5) {
    const oldestEntry = await store.index("timestamp").openCursor();
    if (oldestEntry) {
      await store.delete(oldestEntry.value.id);
    }
  }

  await store.add(searchData);
  await tx.done;
};
