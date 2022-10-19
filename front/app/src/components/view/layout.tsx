import Header from './header'
import Footer from './footer'
import styled from "styled-components";
import tw from 'tailwind.macro';

import type { ReactNode } from "react";

export default function Layout({ children }: {children: ReactNode}) {
  const Contents = styled.div`
    min-height: 800px;
    ${tw`w-full`};
  `;

  return (
    <div className=''>
      <Header />
      <main>
        <Contents>
          {children}
        </Contents>
      </main>
      <Footer />
    </div>
  )
}