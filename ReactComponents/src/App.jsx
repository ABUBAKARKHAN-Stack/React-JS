import NetflixCard from "./components/NetflixCard"; 
import Navbar from "./components/Navbar";
import './components/NetflixCard.module.css'

export const App = () => {
  return (
    <>
    <Navbar />
    <h1 className="text-[32px] font-[800] uppercase underline  text-center text-[#ccc] text-wrap w-full h-full py-20">List Of Best Netflix Series</h1>
    <NetflixCard />
    </>
  );
};
