import Image from "next/image";
 import Mission from "./components/Mission/page";
 import Testimonies from "./components/Testimonials/page";

export default function Home() {
  return (
    <div>
      <main>
        <Mission/>
      <Testimonies/>
      </main>
    </div>
  );
}
