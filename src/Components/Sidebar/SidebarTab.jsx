import React from "react";

export const SidebarTab = ({imgSrc,caption,tabName,setCategory,category,categoryId}) => {
  return (
    <div className={`side-link ${category===categoryId?'active':""}`} onClick={()=>setCategory(categoryId)}>
      <img src={imgSrc} alt={caption} />
      <p>{tabName}</p>
    </div>
  );
};
