'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme/ThemeToggle';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navList = [
  { name: '2Zerozero', href: '/blog' },
  { name: 'About', href: '/about' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b-4 w-full">
      <div className="max-w-[1200px] h-16 flex items-center m-auto justify-between">
        {/* 네비게이션 */}
        <div className="flex">
          {navList.map((navItem, index) => (
            <Link
              href={navItem.href}
              key={navItem.name}
              className={cn('mr-6', pathname?.startsWith(navItem.href) ? 'text-purple-900' : 'text-gray-950')}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        {/* 테마 설정 및 깃허브 링크 */}
        <div className="flex gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="icon" className="hover:bg-muted-foreground">
            <Link href="https://github.com/2Zerozero">
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

/*
  pathname.startsWith()
  JavaScript의 String.prototype.startsWith() 메서드

  문자열이 특정 문자열로 시작하는지를 확인하는 구문
*/
