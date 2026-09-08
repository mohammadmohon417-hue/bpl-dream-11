import { Suspense } from "react"
import Hero from "./assets/component/hero"
import Navbar from "./assets/component/nav"
import Players from "./assets/component/players/players"
import type { Player } from "./assets/type/players"

import "./index.css"


function App() {
  const playersPromise=(async():Promise<Player[]>=>{
    const response = await fetch("/public/players.json");
    const data = await response.json();
    return data;
  });
  return (
    <>
      <Navbar />
      <Hero  />
      <Suspense fallback={<div>Loading players...</div>}>
      <Players playersPromise={playersPromise()} />
      </Suspense>
    </>
  )
}

export default App
