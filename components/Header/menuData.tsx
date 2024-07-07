import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Főoldal",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Rólunk",
    newTab: false,
    path: "/rolunk",
  },
  {
    id: 3,
    title: "Termékeink",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Új lépcsőliftek",
        newTab: false,
        path: "/uj-lepcsoliftek",
      },
      {
        id: 34,
        title: "Platform liftek",
        newTab: false,
        path: "/platformliftek",
      },
      {
        id: 35,
        title: "Használt lépcsőliftek",
        newTab: false,
        path: "/hasznalt-lepcsoliftek",
      },
    ],
  },

  {
    id: 4,
    title: "Kapcsolat",
    newTab: false,
    path: "/kapcsolat",
  },
   {
    id: 5,
    title: "Gyakori kérdések",
    newTab: false,
    path: "/gyakori-kerdesek",
  },
 
];

export default menuData;
