"use client"

import React from "react";
import {
    QueryClientProvider
} from '@tanstack/react-query'
import { getQueryClient } from "@/core/lib/query-client";


export default function TanstackQueryProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}

