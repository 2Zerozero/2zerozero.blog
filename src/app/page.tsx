import { ThemeToggle } from '@/layouts/theme/ThemeToggle';
import { Github } from 'lucide-react';

const Home = () => {
  return (
    <>
      <nav className="max-w-[1200px] h-16 flex items-center m-auto justify-between">
        <div className="flex">2Zerozero</div>

        {/* 테마 설정 및 깃허브 링크 */}
        <div className="flex gap-4">
          <ThemeToggle />
          <div>
            <Github />
          </div>
        </div>
      </nav>

      <div>모드 테스트</div>
    </>
  );
};

export default Home;
