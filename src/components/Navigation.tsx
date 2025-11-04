import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './ui/button';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm"
    >
      <Link to="/" className="text-2xl font-light tracking-widest hover:opacity-70 transition-opacity">
        黒
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to="/"
          className={`text-sm tracking-wider transition-opacity hover:opacity-70 ${
            isActive('/') ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {t.nav.home}
        </Link>
        <Link
          to="/archive"
          className={`text-sm tracking-wider transition-opacity hover:opacity-70 ${
            isActive('/archive') ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {t.nav.archive}
        </Link>
        <Link
          to="/about"
          className={`text-sm tracking-wider transition-opacity hover:opacity-70 ${
            isActive('/about') ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {t.nav.about}
        </Link>
        <Link
          to="/contact"
          className={`text-sm tracking-wider transition-opacity hover:opacity-70 ${
            isActive('/contact') ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {t.nav.contact}
        </Link>

        <div className="h-4 w-px bg-foreground opacity-20" />

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(language === 'jp' ? 'en' : 'jp')}
          className="text-xs tracking-widest opacity-50 hover:opacity-100"
        >
          {language === 'jp' ? 'EN' : 'JP'}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="opacity-50 hover:opacity-100"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
