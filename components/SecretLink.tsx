"use client";

import { useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

const SecretLink = () => {
    const { data: session } = useSession();
    return (
        <div>
            {session?.user?.email && (
                <Link href="/">Secret link</Link>
            )}
        </div>
    )
}

export default SecretLink