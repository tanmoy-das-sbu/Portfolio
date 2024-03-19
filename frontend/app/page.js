'use client'

import Link from "next/link";

function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, Its the Home Route </h1>
      <h2>Kindly go to <Link className="p-5 bg-red-500 text-white" href="/schedule"> Schedule Route</Link> </h2>
    </main>
  );
}

export default Home;
