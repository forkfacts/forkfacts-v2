import React, { useEffect, useRef, useState } from "react";
import { BsShare } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Share } from "@capacitor/share";
import {
  Favorite,
  addFavorite,
  findFavoriteByName,
  removeFavorite,
} from "../../../helpers/ff_favorites";
import { useStore } from "../../../helpers/stores";
import { spaceToDashes } from "../../../helpers/utils";
import { Toast } from "konsta/react";

interface MoreDetailsOptionProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MoreDetailsOption: React.FC<MoreDetailsOptionProps> = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { name } = useStore((state) => state.food);
  const [isExist, setIsExist] = useState<Favorite | null>(null);
  const [message, setMessage] = useState("");
  const [toastLeftOpened, setToastLeftOpened] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    (async function checkIfExits() {
      setIsExist(await findFavoriteByName(name));
    })();
  }, [name, isOpen]);

  const openToast = (setter: (ev: boolean) => void) => {
    setToastLeftOpened(false);
    setter(true);
  };

  const handleAddToFavorites = async () => {
    if (isExist) {
      let res;
      res = await removeFavorite(name);
      if (res.status === 200) {
        setIsOpen(false);
        setMessage("Food removed from favorites");
        openToast(setToastLeftOpened);
      }
    } else {
      const path = `/${spaceToDashes(name)}/`;
      const favoriteData: Favorite = {
        name,
        url: path,
        favorited_on: new Date().toISOString(),
      };
      let res = await addFavorite(favoriteData);
      if (res.status === 200) {
        setIsOpen(false);
        setMessage("Food added to favorites");
        openToast(setToastLeftOpened);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (toastLeftOpened) {
        setToastLeftOpened(false);
      }
    }, 3000);
  }, [toastLeftOpened]);

  const shareApp = async () => {
    Share.canShare()
      .then(() => {
        Share.share({
          title: "Forkfacts",
          text: "Checkout this food app",
          url: `https://www.forkfacts.app/${name}`,
          dialogTitle: "It looks good",
        }).catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.2)] z-[99999] flex justify-end pt-14 pr-5">
          <div
            ref={modalRef}
            className={`${
              isExist && Object.keys(isExist as Favorite).length ? "w-[295px]" : "w-[265px]"
            } px-6 py-5 bg-white shadow flex-col justify-end items-end inline-flex fixed z-50 rounded-[8px]`}
          >
            <div className="px-[0px] flex-col justify-start items-star gap-2 flex">
              <div
                className="px-[10px] justify-start items-center gap-4 inline-flex cursor-pointer"
                onClick={shareApp}
              >
                <BsShare className="w-6 h-6 relative text-primary-40" />
                <h1 className="text-zinc-900 text-[16px] font-medium leading-normal tracking-wide whitespace-nowrap">
                  Share food BsShare
                </h1>
              </div>
              <div
                className="px-[10px] justify-start items-center gap-4 inline-flex mt-5 cursor-pointer"
                onClick={handleAddToFavorites}
              >
                {isExist ? (
                  <>
                    <AiFillHeart className="w-6 h-6 relative text-primary-40 cursor-pointer" />
                    <h1 className="text-zinc-900 text-[16px] font-medium leading-normal tracking-wide whitespace-nowrap">
                      Remove from favourites
                    </h1>
                  </>
                ) : (
                  <>
                    <AiOutlineHeart className="w-6 h-6 relative text-primary-40 cursor-pointer" />
                    <h1 className="text-zinc-900 text-[16px] font-medium leading-normal tracking-wide whitespace-nowrap">
                      Add to favorites
                    </h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Toast position="left" opened={toastLeftOpened}>
        <div className="shrink">{message}</div>
      </Toast>
    </div>
  );
};

export default MoreDetailsOption;
