"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { activeHomeIcon, activeOrderHistoryIcon, activeProfileIcon, cartIcon, homeIcon, orderHistoryIcon, profileIcon } from "@/components/icons/svg-icons";

const BottomNavBar = () => {
    const path = usePathname()
    const navItems = [
        { href: "/", icon: homeIcon, label: "Home", activeIcon: activeHomeIcon },
        { href: "/order-history", icon: orderHistoryIcon, label: "Order History", activeIcon: activeOrderHistoryIcon },
        { href: "/cart", icon: cartIcon, label: "Cart" },
        { href: "/profile", icon: profileIcon, label: "Profile", activeIcon: activeProfileIcon },
    ];
    return (
        <div className="fixed grid grid-cols-4 bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 px-4 py-2">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`flex flex-col gap-2 items-center ${path === item.href ? "text-orange-600" : "text-gray-500"}`}
                >
                    {path === item.href ? item.activeIcon : item.icon}
                    <span className="text-xs">{item.label}</span>
                </Link>
            ))}
        </div>
    );
};

export default BottomNavBar;
