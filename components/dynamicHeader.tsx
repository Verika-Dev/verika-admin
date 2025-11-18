"use client";
import { usePathname } from "next/navigation";

function DynamicHeader() {
  const pathname = usePathname();

  const getHeaderContent = () => {
    switch (pathname) {
      case "/login":
        return {
          title: "login",
          subtitle: "Fill in your details to create an account",
        };
      case "/signUp":
        return {
          title: "Create Account",
          subtitle: "Fill in your details to create an account",
        };
      case "/verify":
        return {
          title: "Verify your mail",
          subtitle: "Enter 4-digit code sent to Johndoe@gmail.com",
        };
      default:
        return {
          title: "Welcome",
          subtitle: "Please navigate to a valid page",
        };
    }
  };

  const { title, subtitle } = getHeaderContent();

  return (
    <div className="w-full mx-auto p-6">
      {/* Dynamic Header Content */}
      <div className="text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

export default DynamicHeader;
