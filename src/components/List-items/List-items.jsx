import React from 'react'
import { getInfo } from '../../Helpers/crud';

export const ItemsData= () => {

  const items = getInfo();
  console.log(items);
  return (
    <div></div>
  );
};