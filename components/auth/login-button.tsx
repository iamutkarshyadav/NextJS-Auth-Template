"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild? : boolean;
}

export const LoginButton = ({
    children, 
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter();
  const  onclick = () => {
      router.push("/auth/login")
    }

    return (
        <button className="cursor-pointer" onClick={onclick}>
            {children}
        </button>
    )
}