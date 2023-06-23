import { Navbar, Page } from "konsta/react";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Favorite, fetchFavorites, removeFavorite } from "../helpers/ff_favorites";
import { BiArrowBack } from "react-icons/bi";
import Sidebar from "../components/Sidebar/Sidebar";
import { TfiTrash } from "react-icons/tfi";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { addSearchEntry } from "../helpers/forkfacts-recent-searches";
import { navigate } from "gatsby";

const Favorites = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [favourites, setFavourites] = useState<Favorite[]>([]);

  useEffect(() => {
    (async function fetchAll() {
      setFavourites(await fetchFavorites());
    })();
  }, []);

  const handleAddToFavorites = async (name: string) => {
    let res = await removeFavorite(name);
    if (res.status === 200) {
      setFavourites(await fetchFavorites());
    }
  };
  const onSelectItem = async (name: string, url: string) => {
    const searchData = {
      name: name,
      hap_name: name,
      category: "Food",
      timestamp: new Date(),
      searchLocation: "Food",
    };
    await addSearchEntry(searchData);
    navigate(url);
  };

  const handleFocus = () => {
    setOpenSearch(true);
  };

  const onClearSearch = () => {
    setQuery("");
  };

  const onClosePage = () => {
    setQuery("");
    setOpenSearch(false);
  };

  const searchIFavorites: Favorite[] = favourites?.filter(
    (item) => item.name.toLowerCase().includes(query.toLowerCase()) || query === ""
  );

  return (
    <Page className="bg-[#ebebeb] overflow-scroll">
      {openSearch ? (
        <div className="bg-[#ebebeb]">
          <div className="bg-[#F3EFF4] w-full fixed top-0 left-0 right-0 mb-10 z-[99999]">
            <div className="flex items-center justify-between w-full gap-1 py-4 px-3">
              <div className="w-[10%] flex ">
                <BiArrowBack className="w-[24px] h-[24px]" onClick={onClosePage} />
              </div>
              <form className="w-[100%] relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <IoMdSearch size={20} />
                </div>
                <input
                  className="rounded-[36px] h-[45px] pl-10 w-full border-[1px] border-[#fff] prose-bodyMedium bg-white font-400 placeholder-dark placeholder:normal z-[999] hover:bg-white active:bg-white outline-none hover:border-0 focus:border-0 focus:outline-none"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                />
                {query && (
                  <div className="absolute right-0 bg-white top-1/2 transform -translate-y-1/2 w-10 h-5 rounded-full z-20">
                    <MdOutlineCancel size={20} onClick={onClearSearch} />
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="bg-[#ebebeb]">
            <div className="bg-white pt-24 shadow-summaryShadow mb-4 pb-0.5 px-4">
              {searchIFavorites.map((item, index) => (
                <div className="mb-5" key={index} onClick={() => onSelectItem(item.name, item.url)}>
                  <div className="w-full h-10 py-2 rounded-lg justify-between items-center gap-[76px] inline-flex mb-3">
                    <div className="p-[0px] flex-col justify-center items-start gap-2 inline-flex">
                      <div className="text-zinc-900 text-[16px] font-medium leading-normal tracking-wide">
                        {item.name}
                      </div>
                    </div>
                    <div>
                      <MdOutlineArrowForwardIos className="w-[18px] h-[18px] relative" />
                    </div>
                  </div>
                  {index + 1 === searchIFavorites.length ? null : <hr />}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#ebebeb]">
          <Navbar
            left={
              <GiHamburgerMenu
                className="text-main cursor-pointer"
                onClick={() => setLeftPanelOpened(true)}
              />
            }
            title="Favourites"
            className="top-0 fixed left-0 right-0 px-2 z-[99999]"
            centerTitle
            fontSizeMaterial="text-[20px] font-500"
            right={<IoIosSearch className="w-[24px] h-[24px] text-main" onClick={handleFocus} />}
            bgClassName="bg-white"
          />
          <div>
            {!favourites.length ? (
              <div className="w-full h-[100vh] p-[0px] bg-white flex-col justify-center items-center gap-[36px] inline-flex mt-2">
                <div className="p-[0px] flex-col justify-start items-center gap-6 flex -mt-8">
                  <img
                    src="/favourites.svg"
                    alt="favourites"
                    className="w-[158px] h-[152px] relative"
                  />
                  <div className="p-[0px] flex-col justify-start items-center gap-6 flex">
                    <div className="w-[286px] text-center prose-bodyLarge font-400 text-main">
                      You have not added any food to favourites
                    </div>
                    <div className="px-6 py-[10px] bg-indigo-100 bg-opacity-50 rounded-[36px] flex-col justify-center items-center gap-2 flex">
                      <div className="text-center font-500 prose-labelLarge text-primary-40">
                        Start searching
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-18 pt-5 pb-1 px-2 bg-white shadow">
                {favourites.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="mb-5"
                      onClick={() => onSelectItem(item.name, item.url)}
                    >
                      <div className="w-full px-4 py-1 rounded-lg flex justify-between items-center gap-[56px]">
                        <h1 className="text-main prose-titleMedium font-500">{item.name}</h1>
                        <div>
                          <TfiTrash
                            className="w-[18px] h-[18px] relative cursor-pointer"
                            onClick={() => handleAddToFavorites(item.name)}
                          />
                        </div>
                      </div>
                      {index + 1 === favourites.length ? null : (
                        <div className="w-full mx-auto h-[0px] border border-zinc-100 mt-5"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="h-[3vh]" />
        </div>
      )}
      <Sidebar leftPanelOpened={leftPanelOpened} setLeftPanelOpened={setLeftPanelOpened} />
    </Page>
  );
};

export default Favorites;