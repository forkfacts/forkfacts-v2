import { Block, BlockTitle, Icon, Link, Navbar, Page, Tabbar, TabbarLink } from "konsta/react";
import { MdDensityMedium, MdEmojiFoodBeverage, MdOutlineFavorite } from "react-icons/md";
import React, { useState } from "react";
import { MobilePanel } from "./MobilePanel";
import { Typography } from "@mui/material";

export default function MobileHome() {
  const [leftFloatingPanelOpened, setLeftFloatingPanelOpened] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <Page>
      <Navbar
        title="Popular foods"
        centerTitle
        className="bg-green-500"
        left={
          <Link navbar iconOnly>
            <Icon material={<MdDensityMedium onClick={() => setLeftFloatingPanelOpened(true)} />} />
          </Link>
        }
      />
      <MobilePanel isOpen={leftFloatingPanelOpened} onClick={setLeftFloatingPanelOpened} />
      <Tabbar labels icons className="left-0 bottom-0 fixed bg-black">
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
          label={<h1 className="text-red-500">Nutrition</h1>}
        />
      </Tabbar>
      <div className="">
        <BlockTitle className="text-center text-red-500 text-3xl">
          <h1>Hi man</h1>
        </BlockTitle>
        <Block>
          <Typography className="material:text-xl font-extrabold text-red-500">
            Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie
            velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis
            felis.
          </Typography>
        </Block>
      </div>
    </Page>
  );
}
