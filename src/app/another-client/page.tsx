'use client'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = () => {
  const { user, isAuthenticated, isLoading, error } = useKindeBrowserClient();
  if (isLoading) {
    return <p>...loading</p>;
  }
  if (!isAuthenticated) {
    return <LoginLink>{error}</LoginLink>;
  } else {
    return <p>{user?.email}</p>;
  }
};

export default page;
