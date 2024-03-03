"use client";
import { Button } from "@/components/ui/button";
import { useOrganization, useUser } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Header from "@/components/header";

export default function Home() {
  const organization = useOrganization();
  const user = useUser();
  const createFile = useMutation(api.files.createFile);
  let orgId: string | undefined = undefined;
  if (organization.isLoaded && user.isLoaded) {
    orgId = organization.organization?.id ?? user.user?.id;
  }
  const collectFiles = useQuery(
    api.files.collectFiles,
    orgId ? { orgId: orgId } : "skip"
  );
  return (
    <div className="min-h-screen">
      <Header />
      <Button
        onClick={() => {
          if (!orgId) return;
          createFile({ name: "Real", orgId: orgId });
        }}
      >
        Click Me!
      </Button>
      {collectFiles?.map((file) => (
        <div key={file._id}>name: {file.args}</div>
      ))}
    </div>
  );
}
