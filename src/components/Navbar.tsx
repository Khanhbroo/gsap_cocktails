import { useGSAP } from "@gsap/react";

import { navLinks } from "../constants";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "top top",
        end: "+2%",
        scrub: 1,
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="./images/logo.png" alt="Logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.title}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
