"use client";

import { usePathname } from "next/navigation";
import styles from "./Main.module.css";
import Link from "next/link";

export default function PathBreadcrumb() {
    const pathname = usePathname();

    const pathText = (() => {
        if (pathname === "/") return "Your Notes";
        if (pathname === "/login") return "Login";
        if (pathname === "/signup") return "Signup";
        return "Your Notes";
    })();

    return (
        <div className={`font-poppins ${styles.pathText}`}>
            <Link href="/" className="font-poppins">
                Homepage /
            </Link>
            <span className={`font-sour-gummy ${styles.pathSubText}`}>
                {pathText}
            </span>
        </div>
    );
}
