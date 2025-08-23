import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {/* Test Instagram Icon */}
      <FaInstagram size={40} color="#E4405F" />

      <a
        href="https://www.instagram.com/springlebots/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-lg text-blue-600 underline"
      >
        Visit our Instagram
      </a>
    </div>
  );
}
