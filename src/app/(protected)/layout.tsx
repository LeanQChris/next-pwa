import { getSession } from "@/core/auth/auth";
import { redirect } from "next/navigation";
import React from "react";


export default async function ProtectedRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession();

    if (session === null) {
        return redirect("/login")
    }

    return (
        <>{children}</>
    );
}

