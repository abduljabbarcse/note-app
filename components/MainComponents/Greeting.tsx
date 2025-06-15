'use client';

import { useAppSelector } from '@/lib/hooks'; // or Context

export default function Greeting() {
    const username = useAppSelector((state) => state.auth.user);
    console.log(username)
    return (
        <h1 >
            Good morning {username?.username}!
        </h1>
    );
}
