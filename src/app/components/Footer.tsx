import logoImage from 'figma:asset/4079d0d9aac833c3c23890d08b2afffd5d27a9a6.png';

export function Footer() {
  return (
    <footer className="border-t border-border mt-16 md:mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center flex flex-col items-center">
        <img src={logoImage} alt="Kanishka Reddy Logo" className="w-12 sm:w-16 h-12 sm:h-16 object-contain mb-6 sm:mb-8 dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300" />
        <p className="text-muted-foreground italic text-sm sm:text-base">
          If it feels right,<br />
          if it stays a little longer—
        </p>
        <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">
          then it was worth building.
        </p>
        <p className="text-muted-foreground mt-6 sm:mt-8 text-xs sm:text-sm">
          © 2026 Kanishka Reddy
        </p>
      </div>
    </footer>
  );
}
