import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      href?: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleOpen = (menuLabel: string) => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
      }
      setOpenMenu(menuLabel);
    };

    const handleClose = () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      closeTimeout.current = setTimeout(() => setOpenMenu(null), 150);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleOpen(navItem.label)}
            onMouseLeave={handleClose}
          >
            <button
              className="relative flex cursor-pointer items-center justify-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition-colors hover:bg-muted"
            >
              <span>{navItem.label}</span>
              {navItem.subMenus && (
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${openMenu === navItem.label ? "rotate-180" : ""}`}
                />
              )}
            </button>

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div
                  className="fixed left-0 right-0 pt-2 z-50 top-[64px] md:top-[80px]"
                  onMouseEnter={() => handleOpen(navItem.label)}
                  onMouseLeave={handleClose}
                >
                  <div className="mx-auto w-full max-w-7xl px-6">
                    <motion.div
                      className="w-full border border-gray-200 bg-white p-4 shadow-lg"
                      style={{
                        borderRadius: 16,
                      }}
                      layoutId="menu"
                    >
                      <div className="flex w-full shrink-0 gap-9 overflow-hidden px-2">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="min-w-[280px] flex-1" key={sub.title}>
                          <h3 className="mb-4 text-sm font-medium capitalize text-gray-500">
                            {sub.title}
                          </h3>
                          <ul className="space-y-4 md:space-y-6">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                                const disabled = !item.href;
                              return (
                                <li key={item.label}>
                                  {disabled ? (
                                    <div className="flex items-start gap-3 group cursor-default">
                                      <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#333333] text-white transition-transform duration-200">
                                        <Icon className="h-5 w-5 flex-none" />
                                      </div>
                                      <div className="w-max leading-5">
                                        <p className="shrink-0 text-sm font-medium text-gray-900 flex items-center gap-2">
                                          {item.label}
                                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">(coming soon...)</span>
                                        </p>
                                        <p className="shrink-0 text-xs text-gray-600">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      href={item.href!}
                                      className="flex items-start gap-3 group rounded-md p-1 -m-1 transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                                    >
                                      <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#333333] text-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                                        <Icon className="h-5 w-5 flex-none" />
                                      </div>
                                      <div className="w-max leading-5">
                                        <p className="shrink-0 text-sm font-medium text-gray-900 transition-colors duration-200 group-hover:text-black">
                                          {item.label}
                                        </p>
                                        <p className="shrink-0 text-xs text-gray-600 transition-colors duration-200 group-hover:text-gray-800">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;