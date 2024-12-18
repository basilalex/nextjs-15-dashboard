import type { NextConfig } from 'next/types';

const nextConfig: NextConfig = {
    experimental: {
        ppr: 'incremental',
    },
};

export default nextConfig;
