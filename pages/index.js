import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useTheme } from "next-themes";
import { Facebook } from "../components/Facebook";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Head>
        <title>PW | WEB Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/PW_logo.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Facebook />
      {/* <button
        className="p-2 rounded-lg fixed bottom-4 right-4"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button> */}

      <label
        htmlFor="default-toggle"
        className="inline-flex items-center cursor-pointer fixed bottom-4 right-4"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 shadow-lg shadow-purple-500/50"></div>
      </label>
    </div>
  );
}
