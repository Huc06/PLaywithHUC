import { Link } from 'react-router-dom';
import {  ShoppingBag } from 'lucide-react';
import { Button } from '../ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Search } from './Search';

export function Header() {
  return (
    <nav className="bg-background px-16 py-3 flex items-center justify-between ">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-2xl font-bold text-text-primary">
          G3-Connect
        </Link>
        {/* <div className="hidden md:flex space-x-6">
          <Link to="/playlink" className="text-text-primary hover:text-primary">
            Playlink
          </Link>
          <Link to="/epals" className="text-text-primary hover:text-primary">
            ePals
          </Link>
          <Link to="/community" className="text-text-primary hover:text-primary">
            Community
          </Link>
          <Link to="/app" className="text-text-primary hover:text-primary">
            App
          </Link>
        </div> */}
      </div>
      <div className="flex items-center space-x-4">
        <Search/>
        <Button variant="ghost" size="icon">
          <ShoppingBag className="h-5 w-5 text-text-primary" />
        </Button>
        <ConnectButton/>
      </div>
    </nav>
  );
}
