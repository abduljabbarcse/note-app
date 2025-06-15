"use client";

import { useAppDispatch } from "@/lib/hooks";
import { usePathname, useRouter } from "next/navigation";
import { logoutUser } from "@/lib/features/authThunks";
import Link from "next/link";

const HeaderClient = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <>
      <Link href="#" className="font-sour-gummy">
        About
      </Link>
      <Link href="/notes" className="font-sour-gummy">
        Notes
      </Link>
      <Link href="#" className="font-sour-gummy">
        Account
      </Link>

      {isAuthPage ? (
        <Link href="/login" className="font-sour-gummy">
          Login
        </Link>
      ) : (
        <button onClick={handleLogout} className="font-sour-gummy">
          Logout
        </button>
      )}
    </>
  );
};

export default HeaderClient;
