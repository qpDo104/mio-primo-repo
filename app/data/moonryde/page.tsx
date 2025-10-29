"use client";
import Image from "next/image";

export default function SplitButton() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="scritta3"><a href="https://www.youtube.com/watch?v=t-p4Lj7UuTA"><img src="/cech.png" height="200"></img>video più popolari</a></div>
        <div className="scritta4"><a href="https://www.youtube.com/watch?v=ir5c8FZ24N8"><img src="/1000.png" height="200"></img>video più popolari</a></div>
        <div className="scritta5"><a href="https://www.youtube.com/watch?v=6OcBjo30Tv4"><img src="/duo.png"></img>video più popolari</a></div>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
        <Image className="foto"
          src="/moon.jpg"
          alt="Next.js logo"
          width={2500}
          height={200}
          priority
        // className="right"
        
        />
       
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <p className="scritta1"><p className="scritta">Moonryde</p> Dario “Moonryde” Ferracci è uno dei content creator più seguiti sulla piattaforma viola, ma anche <p className="scritta">uno dei migliori giocatori professionisti di Call of Duty: Warzone</p>
             Da sempre affronta il mondo videoludico con costanza,
             serietà e competitività, grazie a un mind-set costruito attraverso una carriera nel basket.
             La sua passione per i videogiochi arriva da lontano, con Overboard per PS1 – il suo primissimo videogioco –, poi God of War, per poi sbarcare su Twitch nel 2015 con League of Legends,
             uno dei titoli con cui ha cominciato la sua attività sulla piattaforma streaming.
               </p>
               <p>{"‎ "}</p>
          <p>{"‎ "} </p> 
               </div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          {/* <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p> */}
          <p>{"‎ "}</p>
          <p>{"‎ "} </p>
          <p>{"‎ "} </p>
          <p>{"‎ "} </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}