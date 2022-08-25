import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/init";
import { collection, query, where } from "firebase/firestore";
import { getInfo } from "./crud";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../main";





export const getTotalAmount = (array) => {
  let totalAmount = 0;
  array.forEach((element) => {
    totalAmount += element.Monto;
  });
  return totalAmount;
};

