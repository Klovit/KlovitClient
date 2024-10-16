import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
  } from '@radix-ui/react-navigation-menu'; // Ensure correct import from Radix UI
  import { ModeToggle } from "@/components/ModeToggle"; // Adjust the path for your ModeToggle component
  
  export default function NavigationMenuComponent() {
    return (
      <header className="flex justify-between items-center p-4">
        {/* Logo on the left */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger asChild>
                <a href="/">
                  <img
                    className="ml-4"
                    src="https://docs.klovit.tech/img/Klovit%20Logo.png"
                    height={30}
                    width={40}
                    alt="icon"
                  />
                </a>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Mode toggle on the right */}
        <ModeToggle />
      </header>
    );
  }
  