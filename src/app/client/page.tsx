"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Client = () => {
  const pathname = usePathname();
  const { user, isLoading, isAuthenticated } = useKindeBrowserClient();

  if (isLoading) return <h1>Loading</h1>;
  else {
    return (
      <div>
        {isLoading && pathname !== "/client" && <p>...Loading</p>}
        {isAuthenticated && user?.picture && (
          <Image src={user.picture} alt="user pic" width={30} height={30} />
        )}
        {user?.email && isAuthenticated && <p>Logged in as {user.email}</p>}

        {isAuthenticated && (
          <LoginLink postLoginRedirectURL="/">Log Out</LoginLink>
        )}
      </div>
    );
  }
};

export default Client;
