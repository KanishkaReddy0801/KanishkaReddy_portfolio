import logoImage from 'figma:asset/4079d0d9aac833c3c23890d08b2afffd5d27a9a6.png';

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center flex flex-col items-center">
        <img src={logoImage} alt="Kanishka Reddy Logo" className="w-16 h-16 object-contain mb-8 dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300" />
        <p className="text-muted-foreground italic" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
          If it feels right,<br />
          if it stays a little longer—
        </p>
        <p className="text-muted-foreground mt-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
          then it was worth building.
        </p>
        <p className="text-muted-foreground mt-8" style={{ fontSize: '0.875rem' }}>
          © 2026 Kanishka Reddy
        </p>
      </div>
    </footer>
  );
}
