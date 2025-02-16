'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from 'lucide-react'
import {Link, NavLink} from "react-router-dom"
import Logo from "public/assets/logo.png"

export function Header() {
  //const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#2E7D32] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
         

          <NavLink to="/" className="flex items-center gap-2">
                    <div className="bg-white">
                        <img src={Logo} alt="Organicos Herbal Farm" className="h-8 w-auto" />
                    </div>
           
          </NavLink>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link to="/" >
                  <NavigationMenuLink className={cn(
                    "px-4 py-2 hover:bg-green-700 rounded-md transition-colors"
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-green-700">
                  Our Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {products.map((product) => (
                      <li key={product.title}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={product.href}
                          >
                            <div className="text-sm font-medium leading-none">{product.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {product.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* <NavigationMenuItem> */}
                <Link to="/about" >
                  <NavigationMenuLink className={cn(
                    "px-4 py-2 hover:bg-green-700 rounded-md transition-colors"
                  )}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              {/* </NavigationMenuItem> */}
              <Link to="/otherproducts" >
                  <NavigationMenuLink className={cn(
                    "px-4 py-2 hover:bg-green-700 rounded-md transition-colors"
                  )}>
                    Other Products
                  </NavigationMenuLink>
                </Link>
              {/* <NavigationMenuItem> */}
                <Link to="/contact" >
                  <NavigationMenuLink className={cn(
                    "px-4 py-2 hover:bg-green-700 rounded-md transition-colors"
                  )}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              {/* </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 hover:bg-green-700 rounded-md transition-colors">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#2E7D32] text-white p-0">
              <nav className="flex flex-col h-full">
                <div className="p-4 border-b border-green-700">
                  <Link to="/" className="flex items-center gap-2">
                    <div className="bg-white">
                        <img src={Logo} alt="Organicos Herbal Farm" className="h-8 w-auto" />
                    </div>
                    
                   
                  </Link>
                </div>



                <div className="flex-1 overflow-y-auto">
                  <div className="flex flex-col p-4 space-y-3">
                    <Link 
                      to="/"
                      className="px-4 py-2 hover:bg-green-700 rounded-md transition-colors"
                    >
                      Home
                    </Link>
                    <div className="space-y-2">
                      <p className="px-4 font-semibold">Our Products</p>
                      <div className="pl-4 space-y-2">
                        {products.map((product) => (
                          <Link
                            key={product.title}
                            to={product.href}
                            className="block px-4 py-2 hover:bg-green-700 rounded-md transition-colors text-sm"
                          >
                            {product.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link 
                      to="/about"
                      className="px-4 py-2 hover:bg-green-700 rounded-md transition-colors"
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/otherproducts"
                      className="px-4 py-2 hover:bg-green-700 rounded-md transition-colors"
                    >
                      Other Products
                    </Link>
                    <Link 
                      to="/contact"
                      className="px-4 py-2 hover:bg-green-700 rounded-md transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const products = [
  {
    title: "Shilajit Dry Extract",
    description: "Pure and potent Shilajit extract sourced from the Himalayas.",
    href: "/",
  },
  {
    title: "Herbal Extracts",
    description: "Wide range of natural herbal extracts and powders.",
    href: "/",
  },
  // Add more products as needed
]

