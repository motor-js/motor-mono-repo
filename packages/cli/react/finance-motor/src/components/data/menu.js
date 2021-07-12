import {
  BarChart2,
  File,
  PieChart,
  Package,
} from "react-feather";

const menus = [
  {
    id: 1,
    label: "Group 1",
    url: "/",
    Icon: PieChart,
    submenu: [
      {
        id: 11,
        label: "Dashboard 1",
        url: "/",
        Icon: BarChart2,
      },
      {
        id: 12,
        label: "Dashboard 2",
        url: "/dashboard-two",
        Icon: PieChart,
      }
    ],
  },
  {
    id: 2,
    label: "Group 2",
    url: "/",
    Icon: Package,
    submenu: [
      {
        id: 21,
        label: "Dashboard 3",
        url: "/dashboard-three",
        Icon: File,
      }
    ],
  }
];

export default menus;
