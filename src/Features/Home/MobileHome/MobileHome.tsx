import { App, Icon, Link, Navbar, Page, Tabbar, TabbarLink } from "konsta/react";
import { MdDensityMedium, MdEmojiFoodBeverage, MdOutlineFavorite } from "react-icons/md";
import React, { useState } from "react";
import { MobilePanel } from "./MobilePanel";

export default function MobileHome() {
  const [leftFloatingPanelOpened, setLeftFloatingPanelOpened] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <App safeAreas theme="material" className="k-material-preloader">
      <Page>
        <Navbar
          title="Popular foods"
          centerTitle
          className="bg-red-500"
          left={
            <Link navbar iconOnly>
              <Icon
                material={<MdDensityMedium onClick={() => setLeftFloatingPanelOpened(true)} />}
              />
            </Link>
          }
        />
        <MobilePanel isOpen={leftFloatingPanelOpened} onClick={setLeftFloatingPanelOpened} />
        <Tabbar labels icons className="left-0 bottom-0 fixed">
          <TabbarLink
            active={activeTab === "tab-1"}
            onClick={() => setActiveTab("tab-1")}
            icon={<Icon material={<MdEmojiFoodBeverage className="w-6 h-6" />} />}
            label={"Foods"}
          />
          <TabbarLink
            active={activeTab === "tab-3"}
            onClick={() => setActiveTab("tab-3")}
            icon={<Icon material={<MdOutlineFavorite className="w-6 h-6" />} />}
            label={"Nutrition"}
          />
        </Tabbar>
        <div className="material:w-4">
          <span className="ios:font-bold material:font-semibold material:text-white">Hello</span>
        </div>
        <h1 className="relative hairline-b hairline-red-500 hairline-duration-300 hover:hairline-blue-500 text-red-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis nemo
          laboriosam modi ex explicabo dicta ab eum sequi, minima asperiores officia sint dolorem
          sapiente. Deserunt molestiae enim aliquid incidunt.
        </h1>
      </Page>
    </App>
  );
}
