import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";

function QuickLinks() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 tracking-wide">QUICK LINKS</h3>

      <ul className="space-y-3">
        {links.map(({ name, href }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-2 transition ${
                  isActive
                    ? "text-red-500 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Check
                  size={16}
                  className={isActive ? "text-red-500" : "text-red-500/70"}
                />
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuickLinks;
