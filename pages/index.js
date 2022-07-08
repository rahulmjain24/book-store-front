import Header from "../components/Main/Header/Header";
import {About} from "../components/Main/About/About";
import { Features } from "../components/Main/Features/Features";
import { Stories } from "../components/Main/Stories/Stories";
export default function Home() {


  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Stories />
      </main>
    </>
  );
}
