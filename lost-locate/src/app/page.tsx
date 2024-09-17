import Image from "next/image";
 import Mission from "./components/Mission/page";
 import Testimonies from "./components/Testimonials/page";
import Landing from "./components/Landing";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Updates from "./components/Updates";
import Footer from "./components/Footer";

  export default function Home() {
    return (
      <div>
        <main>
         <Landing/>
         <Updates/>
         <Features/>
         <Mission/>
      <Testimonies/>
         <Partners/>
         <Footer/>
        </main>
      </div>
    );
  }

  



 

