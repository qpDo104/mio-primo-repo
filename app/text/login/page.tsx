"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // qui puoi integrare la chiamata API per l'autenticazione
    console.log("login", { email, password });
    alert("Simulazione login: controlla console");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-[#0b0b0b]">
        <div className="mb-6 flex items-center gap-3">
          <Image src="/pngegg.svg" alt="logo" width={48} height={24} className="dark:invert" />
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">Accedi</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col text-sm">
            <span className="mb-1 text-zinc-600 dark:text-zinc-400">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md border px-3 py-2 text-black dark:bg-[#111] dark:text-zinc-50"
            />
          </label>
          <label className="flex flex-col text-sm">
            <span className="mb-1 text-zinc-600 dark:text-zinc-400">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md border px-3 py-2 text-black dark:bg-[#111] dark:text-zinc-50"
            />
          </label>
          <button type="submit" className="mt-2 rounded-full bg-foreground px-4 py-2 text-background">
            Accedi
          </button>
        </form>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          Non hai un account?{" "}
          <Link href="/text/register" className="font-medium underline">
            Registrati
          </Link>
        </p>
      </div>
    </div>
  );
}