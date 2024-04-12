import logo from "@/assets/images/logo.png";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MenuIcon } from "lucide-react";
import MobileNavbar from "@/components/mobile-navbar";
import LogOutButton from "@/components/drop-down";
import { useDashboard } from "@/hooks/useDashboard";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { toggleSidebar } = useDashboard();

  return (
    <div className="fixed w-full h-16 py-4 right-0 top-0 z-50 border-border/40 bg-none backdrop-blur supports-[backdrop-filter]:bg-none">
      <div className="container w-full flex justify-between items-center h-full mx-auto">
        {isHome ? (
          <div className="flex items-center gap-x-2">
            <img src={logo} alt="logo" className="aspect-square w-8 h-8" />

            <h4 className="hidden sm:inline-block font-playfair text-accent-foreground text-3xl">
              pumpMe
            </h4>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-x-4">
              <MobileNavbar />
              <div className="flex items-center gap-x-4">
                <div className="grid place-content-start py-[13.5px]">
                  <div className="flex gap-x-2 items-center">
                    <Button
                    variant="ghost"
                    className="hidden md:inline-flex items-center p-2 w-10 h-10 transition-all duration-100 rounded-full"
                    >
                      <MenuIcon
                      onClick={toggleSidebar}
                    />
                    </Button>
                    <h4 className="hidden sm:inline-block font-playfair text-accent-foreground text-xl tracking-widest">
                      LandIt
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <ul className="flex space-x-4 items-center font-palanquin text-sm">
          {isHome ? (
            <>
              <Link to="/signin">
                <li>
                  <Button variant={"special"} >
                    Login
                  </Button>
                </li>
              </Link>
              <Link to="/signup">
                <li>
                  <Button
                    className="font-palanquin text-secondary"
                    size="sm"
                  >
                    Register
                  </Button>
                </li>
              </Link>
            </>
          ) : (
            <LogOutButton />
          )}

          <ModeToggle />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
