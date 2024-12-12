"use client"
import React from "react";
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth'
import TanstackQueryProvider from "./tanstac-query.provider";

export default function ProviderWrappers({
    children, session
}: {
    children: React.ReactNode,
    session: Session | null
}) {
    return (
        <SessionProvider session={session}>
            <TanstackQueryProvider>
                {children}
            </TanstackQueryProvider >
        </SessionProvider>
    );
}
