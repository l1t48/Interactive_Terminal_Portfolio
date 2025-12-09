import Terminal from "./components/Terminal"
import Pfp from "./components/Pfp"

function App() {
  return (
    <>
      <div className="w-full h-fit bg-black">
        <div className="w-full flex xl:flex-row xl:justify-between flex-col-reverse justify-between bg-[radial-gradient(circle_at_80%_50%,rgba(34,197,94,0.25),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.12),transparent_55%)] animate-glow">
          <div className="xl:w-[60%] w-full xl:border-r-4 xl:border-green-400/60 xl:shadow-[2px_0_15px_rgba(34,197,94,0.25)]">
            <Terminal />
          </div>
          <div className="xl:w-[40%] w-full">
            <Pfp />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
