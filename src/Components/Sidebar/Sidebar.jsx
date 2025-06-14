import React from "react";
import "./Sidebar.css";
import * as assets from "../../assets/assets.jsx";
import { SidebarTab } from "./SidebarTab.jsx";
import {categoryIDs} from "../../Data/helper.jsx"

export const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <SidebarTab imgSrc={assets.home} caption="" tabName="Home" setCategory={setCategory} category={category} categoryId={categoryIDs.recommend}/>
        <SidebarTab imgSrc={assets.gameIcon} caption="" tabName="Gaming" setCategory={setCategory} category={category} categoryId={categoryIDs.gaming}/>
        <SidebarTab imgSrc={assets.automobiles} caption="" tabName="Automobiles" setCategory={setCategory} category={category} categoryId={categoryIDs.automobiles}/>
        <SidebarTab imgSrc={assets.sports} caption="" tabName="Sports" setCategory={setCategory} category={category} categoryId={categoryIDs.sports}/>
        <SidebarTab imgSrc={assets.entertainment} caption="" tabName="Entertaiment" setCategory={setCategory} category={category} categoryId={categoryIDs.entertainment}/>
        <SidebarTab imgSrc={assets.tech} caption="" tabName="Technology" setCategory={setCategory} category={category} categoryId={categoryIDs.technology}/>
        <SidebarTab imgSrc={assets.music} caption="" tabName="Music" setCategory={setCategory} category={category} categoryId={categoryIDs.music}/>
        <SidebarTab imgSrc={assets.blogs} caption="" tabName="Blogs" setCategory={setCategory} category={category} categoryId={categoryIDs.blogs}/>
        <SidebarTab imgSrc={assets.news} caption="" tabName="News" setCategory={setCategory} category={category} categoryId={categoryIDs.news}/>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <SidebarTab imgSrc={assets.jack} caption="" tabName="PewDiePie"/>
        <SidebarTab imgSrc={assets.simon} caption="" tabName="MrBeast"/>
        <SidebarTab imgSrc={assets.gerard} caption="" tabName="Justine Bieber"/>
        <SidebarTab imgSrc={assets.megan} caption="" tabName="5-Minute Craft"/>
        <SidebarTab imgSrc={assets.cameron} caption="" tabName="Nass Daily"/>
      </div>
    </div>
  );
};
