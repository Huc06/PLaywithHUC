import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Search } from "./Search";
import merry from "../../assets/merry.svg";

export function Header() {
  return (
    <nav className="bg-background px-16 py-3 flex items-center justify-between ">
      <div className="flex items-center space-x-8">
        <Link
          to="/"
          className="text-3xl font-bold text-text-primary flex items-center space-x-2 font-bangers"
        >
          G3-Connect
          <img src={merry} alt="Merry" className="h-10 w-10" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Search />
        <Button variant="ghost" size="icon">
          <ShoppingBag className="h-5 w-5 text-text-primary" />
        </Button>
        <ConnectButton />
      </div>
    </nav>
  );
}
