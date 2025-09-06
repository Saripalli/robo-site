// components/RightMenuLayout.js
"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function RightMenuLayout() {
  const [open, setOpen] = useState(false);
  const [robotsOpen, setRobotsOpen] = useState(false);

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
            width: 260,
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
          {/* Static links */}
          {[
            { href: "/#top", label: "Home" },
            { href: "/#about", label: "About Us" },
            { href: "/catalog", label: "Our Robotic Solutions" }, // new page link
          ].map((item) => (
            <a key={item.href} href={item.href} style={baseLink} {...hoverHandlers}>
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
          ))}

          {/* Our Robots (expandable group) */}
          <div
            onClick={() => setRobotsOpen(!robotsOpen)}
            style={{
              ...baseLink,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Our Robots
            <ChevronDown
              size={16}
              style={{ transform: robotsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </div>
          {robotsOpen && (
            <div style={{ paddingLeft: 16 }}>
              <a href="/#robots-food" style={baseLink} {...hoverHandlers}>
                Food Delivery & BOTS
                <span className="underline" style={{ position: "absolute", left: 0, bottom: 0, height: "2px", width: "0", backgroundColor: "#2E7D32", transition: "width 0.3s ease" }} />
              </a>
              <a href="/#robots-cleaning" style={baseLink} {...hoverHandlers}>
                Commercial Cleaning BOTS
                <span className="underline" style={{ position: "absolute", left: 0, bottom: 0, height: "2px", width: "0", backgroundColor: "#2E7D32", transition: "width 0.3s ease" }} />
              </a>
            </div>
          )}

          {/* Remaining links */}
          {[
            { href: "/#industries", label: "Industries" },
            { href: "/#consult", label: "Book a consultation" },
            { href: "/#case-studies", label: "Case Studies" },
          ].map((item) => (
            <a key={item.href} href={item.href} style={baseLink} {...hoverHandlers}>
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
          ))}

          {/* Contact goes to homepage contact anchor */}
          <a href="/#contact" style={baseLink} {...hoverHandlers}>
            Contact Us
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
        </aside>
      )}
    </>
  );
}
