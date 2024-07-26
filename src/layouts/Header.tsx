import { ThemeToggle } from './theme/ThemeToggle';
import { Github } from 'lucide-react';

const Header = () => {
  return (
    <div className="border-b-4">
      <nav className="max-w-[1200px] h-16 flex items-center m-auto justify-between">
        {/* 로고 */}
        <div className="flex">2Zerozero</div>

        {/* 테마 설정 및 깃허브 링크 */}
        <div className="flex gap-4">
          <ThemeToggle />
          <div className="flex items-center h-10 w-10 justify-center hover:bg-muted-foreground">
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
