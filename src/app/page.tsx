"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createFile = useMutation(api.files.createFile);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <SignedIn>
        <Button>
          <SignOutButton />
        </Button>
      </SignedIn>
      <SignedOut>
        <Button>
          <SignInButton mode="modal" />
        </Button>
      </SignedOut>
      <Button onClick={() => createFile({ name: "Real" })}>Click Me!</Button>
    </div>
  );
}
