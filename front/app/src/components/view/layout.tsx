import Header from './header'
import Footer from './footer'
import styled from "styled-components";

import type { ReactNode } from "react";

export default function Layout({ children }: {children: ReactNode}) {
  const Contents = styled.div`
    min-height: 600px;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 1px 4px rgb(0 0 0 / 32%);
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