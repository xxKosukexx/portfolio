import Header from './header'
import Footer from './footer'
import styled from "styled-components";
import tw from 'tailwind.macro';

import type { ReactNode } from "react";

export default function Layout({ children }: {children: ReactNode}) {
  const Contents = styled.div`
    max-width: 800px;
    ${tw`w-full`};
  `;

  const Main = styled.main`
    min-height: 800px;
    background-color: rgb(241 245 249);
    ${tw`w-full`};
  `;

  return (
    <div className=''>
      <Header />
      <Main>
        <Contents>
          {children}
        </Contents>
      </Main>
      <Footer />
    </div>
  )
}