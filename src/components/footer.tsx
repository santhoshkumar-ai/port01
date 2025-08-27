import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-6 pt-20 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center border-t border-gray-200 py-6">
          <Typography
            className="font-sora text-center text-gray-700 font-normal text-sm "
          >
            Made with more bugs than caffeine ☕🐛 — © {CURRENT_YEAR} SujaySharvesh
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
