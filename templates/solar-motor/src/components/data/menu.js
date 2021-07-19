import {
  BarChart2,
  File,
  PieChart,
} from "react-feather";

const menus = [
  {
    id: 1,
    label: "Group 1",
    url: "/",
    submenu: [
      {
        id: 11,
        label: "Dashboard 1",
        url: "/",
        Icon: PieChart,
      },
      {
        id: 12,
        label: "Dashboard 2",
        url: "/dashboard-two",
        Icon: BarChart2,
      }
    ],
  },
  {
    id: 2,
    label: "Group 2",
    url: "/",
    submenu: [
      {
        id: 13,
        label: "Dashboard 3",
        url: "/dashboard-three",
        Icon: File,
      },
    ],
  },
];

export default menus;
