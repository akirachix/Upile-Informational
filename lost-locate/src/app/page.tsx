
 import Mission from "./components/Mission/page";
 import Testimonies from "./components/Testimonials/page";
import Landing from "./components/Landing";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Updates from "./components/Updates";
import Footer from "./components/Footer";
import About from "./components/About";

  export default function Home() {
    return (
      <div>
        <main>
         <Landing/>
         <Updates/>
         <About/>
         <Features/>
         <Mission/>
      <Testimonies/>
         <Partners/>
         <Footer/>
        </main>
      </div>
    );
  }

  



 

