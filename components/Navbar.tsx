export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-semibold"
        >
          Tim Bernasch
        </a>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:underline">
            About
          </a>

          <a href="#projects" className="hover:underline">
            Projects
          </a>

          <a href="#experience" className="hover:underline">
            Experience
          </a>

          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}