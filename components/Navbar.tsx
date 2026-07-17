export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-zinc-900/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="/profile"
          className="font-semibold text-zinc-900 dark:text-zinc-100"
        >
          Tim Bernasch
        </a>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="text-zinc-700 hover:underline dark:text-zinc-300">
            About
          </a>

          <a href="#experience" className="text-zinc-700 hover:underline dark:text-zinc-300">
            Experience
          </a>

          <a href="#projects" className="text-zinc-700 hover:underline dark:text-zinc-300">
            Projects
          </a>

          <a href="#contact" className="text-zinc-700 hover:underline dark:text-zinc-300">
            Contact
          </a>

          <a href="/profile/resume.html" className="text-zinc-700 hover:underline dark:text-zinc-300">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}