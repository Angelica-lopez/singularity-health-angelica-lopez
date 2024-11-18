import Navbar from "../../components/Navbar/Navbar";
import miImagen from "./../../assets/pet.svg";

const Header = () => {
  return (
    <div className="bg-[#FD6845] p-4 flex items-center justify-between px-[50px]">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <img src={miImagen} alt="Mi SVG" className="w-8 h-8" />
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
