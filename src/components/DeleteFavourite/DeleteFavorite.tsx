import React, { useEffect, useRef } from "react";

interface DeleteFavoriteProps {
  handleRemoveToFavorites: (name: string) => Promise<void>;
  deleteFavorite: {
    open: boolean;
    name: string;
  };
  onCancelFavoriteDelete: () => void;
  setDeleteFavorite: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      name: string;
    }>
  >;
}

const DeleteFavorite: React.FC<DeleteFavoriteProps> = ({
  handleRemoveToFavorites,
  deleteFavorite,
  onCancelFavoriteDelete,
  setDeleteFavorite,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setDeleteFavorite({
          open: false,
          name: "",
        });
      }
    };
    if (deleteFavorite.open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [deleteFavorite.open, setDeleteFavorite]);

  return (
    <div
      ref={modalRef}
      className={`${
        deleteFavorite.open ? "flex" : "hidden"
      } fixed top-0 left-0 right-0 bottom-0 justify-center items-center bg-[rgba(0,0,0,0.2)] z-[9999]`}
    >
      <div className="w-[328px] h-[168px] p-4 bg-white rounded-[8px] flex-col justify-center items-start gap-6 inline-flex">
        <div className="flex-col justify-start items-start gap-2 flex">
          <h1 className="prose-titleMedium font-500 text-main">Delete favourite?</h1>
          <div className="w-[284px] prose-bodyMedium text-textDark font-400">
            You are about to delete this food from favourite. Do you want to continue?
          </div>
        </div>
        <div className="self-stretch justify-end items-center gap-[7px] inline-flex">
          <div className="px-6 py-2.5 rounded-[34px] order border   border-indigo-600 flex-col justify-center items-center gap-2 inline-flex">
            <button
              className="text-center text-indigo-600 text-[14px] font-medium leading-tight tracking-wide"
              onClick={onCancelFavoriteDelete}
            >
              Cancel
            </button>
          </div>
          <div className="px-6 py-2.5 bg-indigo-600 rounded-[34px] flex-col justify-center items-center gap-2.5 inline-flex">
            <button
              className="text-center text-white text-[14px] font-medium leading-tight tracking-wide"
              onClick={() => handleRemoveToFavorites(deleteFavorite.name)}
            >
              Yes, please
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteFavorite;
