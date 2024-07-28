import IconGithub from '@/components/icon/Github';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex h-40 items-center justify-center flex-col gap-2">
      {/* Github */}
      <Link href="https://github.com/2Zerozero" target="_blank" rel="noopener noreferrer">
        <IconGithub height={30} width={30} />
      </Link>

      {/* Copyright */}
      <div>
        © 2024. <span className="font-bold">2Zerozero&nbsp;</span> all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

/*
  Link 태그
  target="_blank" : HTML의 기본 링크 속성인 target을 직접 사용할 수 없어 속성을 지정하는 것.
  rel="noopener noreferrer" : 이 속성은 링크된 페이지가 링크를 열었던 원본 페이지의 window 객체를 참조하지 못하도록 하여 보안성을 높여준다.
*/
