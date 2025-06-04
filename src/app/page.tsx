"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onError: (error) => {
          console.error("Error creating user:", error);
        },
        onSuccess: () => {
          console.log("User created successfully");
          // Optionally, redirect or show a success message
        },
      },
    );
  };

  if (session) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
        <p>Email: {session.user.email}</p>

        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleSubmit}>Create User</Button>
    </div>
  );
}

