import Image from "next/image";
import PulsingSvg from '../components/PulsingSvg';

export default function Home() {
  return (
    <main className="relative w-screen h-screen flex place-items-center justify-center">
      <div className=" absolute w-96">
        <PulsingSvg />
        <h1 className="dm-serif-display-regular font-light md:text-6xl text-3xl text-center text-black -mt-2">visual studios</h1>
      </div>
    </main>
  );
}
