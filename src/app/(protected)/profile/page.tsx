
import MobileHeader from "@/components/ui/headers/mobile.header";
import Profile from "@/modules/protected/profile/profile";
import React from "react";

export default function ProfilePage() {
    return (
        <div>
            <MobileHeader title="Profile" />
            <Profile />
        </div>
    );
}
