import {
  BarChart2,
  Calendar,
  MessageSquare,
  Users,
  FileText,
  Mail,
  LogIn,
  UserPlus,
  UserCheck,
  ShieldOff,
  User,
  File,
  PieChart,
  Package,
  Layers,
  Box,
  Archive,
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
        url: "/",
        Icon: BarChart2,
      }
    ],
  },
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
        url: "/",
        Icon: BarChart2,
      }
    ],
  },
];

export default menus;
