import React from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="flex gap-2 justify-between mt-2">
      <Link href={"/"}>
        <div className="text-white text-xs text-center w-20 h-9 rounded-full bg-orange-500">
          Company Logo
        </div>
      </Link>
      <ul className="flex item-center content-center gap-2">
        {!user && <li className="hover:text-blue-800">Home | About | Info</li>}
        {user && (
          <li>
            <Link href={"/dashboard"}>
              <div className="flex gap-2">
                <div>{user.displayName}</div>
                <div>
                  <img
                    src={user.photoURL}
                    alt="Your Profile"
                    className="h-8 w-8 rounded-full"
                  />
                </div>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
