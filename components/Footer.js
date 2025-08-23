import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid" style={{ gap: 12 }}>
        <div className="small">© {new Date().getFullYear()} RoboServe Automation Pvt Ltd. All rights reserved.</div>
        <div className="small">
          <Link href="/privacy">Privacy</Link> • <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
