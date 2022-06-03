import {
  AiFillHome,
  AiOutlineApartment,
  AiTwotoneReconciliation,
} from "react-icons/ai";
import { BsFillCpuFill } from "react-icons/bs";
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  // {
  //   path: "",
  //   component: "pages/Login",
  //   layout: null,
  //   layoutProps: "",
  //   navBar: false,
  // },
  // {
  //   path: "/home",
  //   component: "pages/Home",
  //   layout: "SideBar",
  //   layoutProps: "",
  //   icon: <AiFillHome size={25} />,
  //   label: "Home",
  // },
  {
    path: "/devices-management",
    component: "pages/DevicesManagement",
    layout: "SideBar",
    layoutProps: "",
    icon: <BsFillCpuFill size={25} />,
    label: "Device Management",
  },
  {
    path: "/task-management",
    component: "pages/Task",
    layout: "SideBar",
    layoutProps: "",
    icon: <AiTwotoneReconciliation size={25} />,
    label: "Task Management",
  },
  {
    path: "/services-management",
    component: "pages/ServicesMGMT",
    layout: "SideBar",
    layoutProps: "",
    icon: <AiOutlineApartment size={25} />,
    label: "Services Management",
  },
];
