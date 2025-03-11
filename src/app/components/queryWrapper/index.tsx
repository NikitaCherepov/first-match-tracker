'use client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactNode } from 'react';

interface QueryWrapperProps {
    children: ReactNode;
}

export default function QueryWrapper({children}: QueryWrapperProps) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}