import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Greeting from "./components/Greeting.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Information from "./components/Information.tsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-black text-gray-100">
      <Header />
      <div className="flex-grow flex flex-col">
        <Greeting />
        <Skills />
        <Experience />
        <Projects />
        <Information />
      </div>
      <Footer />
    </div>
  );
}

export default App;
