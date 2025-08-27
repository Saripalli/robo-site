"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function RightMenuLayout() {
  const [open, setOpen] = useState(false);
  const [robotsOpen, setRobotsOpen] = useState(false);

  const linkStyle = {
    display: "block",
    padding: "10px 12px",
    borderRadius: 6,
    color: "#1f2937",
    textDecoration: "none",
    fontWeight: 500,
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
            width: 240,
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            padding: 12,
            zIndex: 40,
            maxHeight: "75vh",
            overflowY: "auto",
            transition: "all 0.3s ease",
          }}
        >
          <a href="#top" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About Us</a>

          {/* Robots parent */}
          <div
            onClick={() => setRobotsOpen(!robotsOpen)}
            style={{
              ...linkStyle,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Robots
            <ChevronDown size={16} style={{ transform: robotsOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
          </div>
          {robotsOpen && (
            <div style={{ paddingLeft: 16 }}>
              <a href="#robots-food" style={{ ...linkStyle, fontSize: 14 }}>Food Delivery & BOTS</a>
              <a href="#robots-cleaning" style={{ ...linkStyle, fontSize: 14 }}>Commercial Cleaning BOTS</a>
            </div>
          )}

          <a href="#industries" style={linkStyle}>Industries</a>
          <a href="#consult" style={linkStyle}>Book a consultation</a>
          <a href="#case-studies" style={linkStyle}>Case Studies</a>
          <a href="#contact" style={linkStyle}>Contact Us</a>
        </aside>
      )}
    </>
  );
}
