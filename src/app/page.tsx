"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { collectFiles } from "../../convex/files";

export default function Home() {
  const createFile = useMutation(api.files.createFile);
  const collectFiles = useQuery(api.files.collectFiles);
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
      {collectFiles?.map((file) => (
        <div key={file.id}>{file.args}</div>
      ))}
    </div>
  );
}
