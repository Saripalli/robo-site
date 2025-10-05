// components/RightMenuLayout.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function RightMenuLayout() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false); // controls Contact Us submenu

  const baseLink = {
    display: "block",
    padding: "10px 12px",
    borderRadius: 6,
    color: "#1f2937",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "18px",
    position: "relative",
  };

  const hoverHandlers = {
    onMouseEnter: (e) => {
      e.currentTarget.style.color = "#2E7D32";
      const underline = e.currentTarget.querySelector(".underline");
      if (underline) underline.style.width = "100%";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.color = "#1f2937";
      const underline = e.currentTarget.querySelector(".underline");
      if (underline) underline.style.width = "0";
    },
  };

  const menuItems = [
    { href: "/#about", label: "About Us" },
    { href: "/#industries", label: "Industries" },
    { href: "/#solutions", label: "Our Robotic Solutions" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/press-release.pdf", label: "Press", external: true }, // PDF link
    {
      href: "/#contact",
      label: "Contact Us",
      subItems: [{ href: "/#quick-faqs", label: "FAQs" }],
    },
  ];

  const renderMenuItem = (item, isMobile = false) => {
    // Collapsible Contact Us
    if (item.subItems) {
      return (
        <div key={item.href} style={{ marginBottom: 4 }}>
          <div
            style={{ ...baseLink, cursor: "pointer" }}
            onClick={() => setContactOpen(!contactOpen)}
            {...hoverHandlers}
          >
            {item.label}
            <span
              className="underline"
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                height: "2px",
                width: "0",
                backgroundColor: "#2E7D32",
                transition: "width 0.3s ease",
              }}
            />
          </div>
          {contactOpen && (
            <div style={{ marginTop: 4 }}>
              {item.subItems.map((sub) =>
                isMobile ? (
                  <Link key={sub.href} href={sub.href} legacyBehavior>
                    <a
                      onClick={() => setOpen(false)}
                      style={{
                        ...baseLink,
                        paddingLeft: 24,
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                      {...hoverHandlers}
                    >
                      {sub.label}
                      <span
                        className="underline"
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: 0,
                          height: "2px",
                          width: "0",
                          backgroundColor: "#2E7D32",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </a>
                  </Link>
                ) : (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    style={{
                      ...baseLink,
                      paddingLeft: 24,
                      fontSize: "16px",
                      fontWeight: 400,
                    }}
                    onClick={() => setOpen(false)}
                    {...hoverHandlers}
                  >
                    {sub.label}
                    <span
                      className="underline"
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        height: "2px",
                        width: "0",
                        backgroundColor: "#2E7D32",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      );
    }

    // External PDF
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={baseLink}
          onClick={() => setOpen(false)}
          {...hoverHandlers}
        >
          {item.label}
          <span
            className="underline"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              height: "2px",
              width: "0",
              backgroundColor: "#2E7D32",
              transition: "width 0.3s ease",
            }}
          />
        </a>
      );
    }

    // Normal internal link
    return (
      <Link key={item.href} href={item.href} style={baseLink} onClick={() => setOpen(false)} {...hoverHandlers}>
        {item.label}
        <span
          className="underline"
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            height: "2px",
            width: "0",
            backgroundColor: "#2E7D32",
            transition: "width 0.3s ease",
          }}
        />
      </Link>
    );
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          top: 80,
          right: 20,
          zIndex: 50,
          background: "#2E7D32",
          color: "#fff",
          padding: "8px 10px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Slide-out menu */}
      {open && (
        <aside
          style={{
            position: "fixed",
            right: 16,
            top: 120,
            width: 280,
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            padding: 12,
            zIndex: 40,
            maxHeight: "75vh",
            overflowY: "auto",
          }}
        >
          {menuItems.map((item) => renderMenuItem(item, true))}
        </aside>
      )}
    </>
  );
}
