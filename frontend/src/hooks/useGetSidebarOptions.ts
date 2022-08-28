import menuList, { menuIn } from "../mocks/menuItems";

/**
 * Hook to get the Sidebar Options on the basis of User Role
 * @returns  menus
 */
const useGetSidebarOptions = (): { sidebarOptions: menuIn[] } => {
    const menus: menuIn[] = [...menuList];
    return { sidebarOptions: menus };
};

export default useGetSidebarOptions;
