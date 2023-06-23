import { DBSchema, IDBPDatabase, openDB } from "idb";

interface DBData extends DBSchema {
  searches: { key: string; value: number };
  favorites: {
    value: {
      name: string;
      url: string;
      favorited_on: string;
    };
    key: string;
    indexes: { favorited_on: string };
  };
}

export interface Favorite {
  name: string;
  url: string;
  favorited_on: string;
}

const initDB = async (): Promise<IDBPDatabase<DBData>> => {
  const db = await openDB<DBData>("favorites", 1.0, {
    async upgrade(db) {
      try {
        const v1Db = db as any as IDBPDatabase<DBData>;
        const favoritesStore = v1Db
          .createObjectStore("favorites", {
            keyPath: "favoriteId",
            autoIncrement: true,
          })
          .createIndex("favorited_on", "favorited_on");
        return favoritesStore;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return db;
};

export const addFavorite = async (favoriteData: {
  name: string;
  url: string;
  favorited_on: string;
}): Promise<{ status: number; message: string }> => {
  try {
    const db = await initDB();
    const store = db.transaction("favorites", "readwrite").objectStore("favorites");
    await store.add(favoriteData);
    return { status: 200, message: "Added to favorites" };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "failed to add favorites",
    };
  }
};

export const fetchFavorites = async (): Promise<
  {
    name: string;
    url: string;
    favorited_on: string;
  }[]
> => {
  try {
    const db = await initDB();
    const store = db.transaction("favorites", "readonly").objectStore("favorites");
    const index = store.index("favorited_on");
    const allFavorites = await index.getAll();
    const sortedFavorites = allFavorites.sort(
      (a, b) => new Date(b.favorited_on).getTime() - new Date(a.favorited_on).getTime()
    );

    return sortedFavorites;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const findFavoriteByName = async (
  name: string
): Promise<{
  name: string;
  url: string;
  favorited_on: string;
} | null> => {
  try {
    const db = await initDB();
    const store = db.transaction("favorites", "readonly").objectStore("favorites");
    const allFavorites = await store.getAll();
    const favorite = allFavorites.find((fav) => fav.name === name);
    return favorite || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeFavorite = async (
  name: string
): Promise<{ status: number; message: string }> => {
  try {
    const db = await initDB();
    const store = db.transaction("favorites", "readwrite").objectStore("favorites");
    const allFavorites = await store.getAll();
    const favorite: any = allFavorites.find((fav) => fav.name === name);

    if (favorite) {
      await store.delete(favorite.favoriteId);
      return { status: 200, message: "Favorite removed successfully" };
    } else {
      return { status: 404, message: "Favorite not found" };
    }
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Failed to remove favorite" };
  }
};
