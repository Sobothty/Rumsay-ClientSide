import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function NavbarPage() {
  return (
    <Navbar fluid rounded>
    <NavbarBrand href="/">
      <img src="src/assets/logo/Rumsay.png" className="ml-1.5 h-14 sm:h-18" alt="Flowbite React Logo" />
    </NavbarBrand>
    <div className="flex gap-2 md:order-2">
      <Button className="bg-primary">Sign-In</Button>
      <NavbarToggle />
    </div>
    <NavbarCollapse>
      <NavbarLink href="/" className="text-white bg-primary font-bold hover:bg-primary md:hover:bg-primary lg:text-primary lg:hover:text-white lg:hover:bg-none">
        Home
      </NavbarLink>
      <NavbarLink href="/about" className="text-primary font-bold hover:bg-primary">About</NavbarLink>
      <NavbarLink href="#" className="text-primary font-bold hover:bg-primary">Services</NavbarLink>
      <NavbarLink href="#" className="text-primary font-bold hover:bg-primary">Pricing</NavbarLink>
      <NavbarLink href="#" className="text-primary font-bold hover:bg-primary">Contact</NavbarLink>
    </NavbarCollapse>
  </Navbar>
  )
}
