import Header from "../components/Main/Header/Header";
import {About} from "../components/Main/About/About";
import { Features } from "../components/Main/Features/Features";
import { Stories } from "../components/Main/Stories/Stories";
import Nav from "../components/Other/Nav/Nav";
export default function Home() {


  return (
    <>
      <Header />
      <main>
        <Nav></Nav>
        <About />
        <Features />
        <Stories />
      </main>
    </>
  );
}
