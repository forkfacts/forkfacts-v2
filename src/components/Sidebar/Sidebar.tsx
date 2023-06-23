import { Link } from "gatsby";
import { Page, Panel } from "konsta/react";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineHome, MdOutlineSettings, MdHome } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";

interface SidebarProps {
  leftPanelOpened: boolean;
  setLeftPanelOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const items = [
  { name: "Home", url: "/", outlineIcon: MdOutlineHome, filledIcon: MdHome },
  { name: "Favourites", url: "/favorites", outlineIcon: AiOutlineHeart, filledIcon: AiFillHeart },
  {
    name: "Settings",
    url: "/settings",
    outlineIcon: MdOutlineSettings,
    filledIcon: RiSettings3Fill,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ leftPanelOpened, setLeftPanelOpened }) => {
  const [selectedRoute, setSelectedRoute] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setSelectedRoute(path);
  }, []);

  return (
    <div>
      <Panel
        side="left"
        opened={leftPanelOpened}
        onBackdropClick={() => setLeftPanelOpened(false)}
        className="z-[999999]"
      >
        <Page className="bg-surface overflow-hidden">
          <div className="w-[282px] h-[926px] p-[0px] rounded-lg justify-start items-start gap-[30px] inline-flex">
            <div className="h-[926px] px-4 pt-[62px] bg-white flex-col justify-start items-start gap-6 inline-flex">
              <div>
                <img src="/forkfacts-logo.svg" alt="logo" />
              </div>
              <div className="p-[0px] flex-col justify-start items-start gap-6 flex mt-5">
                {items.map((item, index) => (
                  <Link to={item.url} key={index}>
                    <div
                      className={`w-[250px] h-10 pl-2 py-[4px] justify-start items-center gap-4 inline-flex ${
                        (selectedRoute.startsWith(item.url) && item.url !== "/") ||
                        selectedRoute === item.url
                          ? "bg-[#E2DFFF] text-primary-40"
                          : "text-dark"
                      }`}
                    >
                      {(selectedRoute.startsWith(item.url) && item.url !== "/") ||
                      selectedRoute === item.url ? (
                        <item.filledIcon
                          className={`w-[24px] h-[24px] ${
                            (selectedRoute.startsWith(item.url) && item.url !== "/") ||
                            selectedRoute === item.url
                              ? "#0D5FAC"
                              : "#1A1C1E"
                          }`}
                        />
                      ) : (
                        <item.outlineIcon
                          className={`w-[24px] h-[24px] ${
                            (selectedRoute.startsWith(item.url) && item.url !== "/") ||
                            selectedRoute === item.url
                              ? "#0D5FAC"
                              : "#1A1C1E"
                          }`}
                        />
                      )}
                      <div className="text-center prose-titleMedium font-500">{item.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Page>
      </Panel>
    </div>
  );
};

export default Sidebar;
