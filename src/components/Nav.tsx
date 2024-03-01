import Link from "next/link";
import React from "react";
import LinkComponent from "./LinkComponent";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const links = [
  { path: "/", name: "Home" },
  { path: "/dashboard", name: "Dashboard" },
  { path: "/admin", name: "Admin" },
  { path: "/client", name: "client" },
];

const Nav = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  const user = await getUser();
  return (
    <header className="bg-slate-300 p-6">
      <nav className="max-w-4xl mx-auto flex justify-between ">
        <ul className="flex justify-end gap-10">
          {links.map((link) => {
            const content = (
              <LinkComponent
                name={link.name}
                path={link.path}
                key={link.name}
              />
            );

            if (link.path == "/dashboard" || link.path == "/client") {
              if (isLoggedIn) {
                return content;
              } else return null;
            } else if (link.path == "/admin") {
              if (isLoggedIn && user?.email == "itxti909@gmail.com") {
                return content;
              } else return null;
            } else {
              return content;
            }
          })}
        </ul>

        <div className="flex justify-end gap-10">
          {isLoggedIn ? (
            <LogoutLink postLogoutRedirectURL="/">Log Out</LogoutLink>
          ) : (
            <>
              <LoginLink>Sign In</LoginLink>

              <RegisterLink>Register</RegisterLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
