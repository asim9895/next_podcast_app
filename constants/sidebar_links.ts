import { icons } from "./icons";

export interface SidebarLink {
  id: number;
  route: string;
  label: string;
  icon: string;
}

export const sidebar_links: SidebarLink[] = [
  {
    id: 1,
    route: "/",
    label: "Home",
    icon: icons.home,
  },
  {
    id: 2,
    route: "/discover",
    label: "Discover",
    icon: icons.discover,
  },
  {
    id: 3,
    route: "/profile",
    label: "Profile",
    icon: icons.profile,
  },
];
