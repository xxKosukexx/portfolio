import styled from "styled-components";
import tw from 'tailwind.macro';

export default () => {
  const Contents = styled.div`
    max-width: 800px;
    ${tw`w-full mr-auto ml-auto`};
  `;

  const Title = styled.div`
    ${tw`text-lg`};
  `;

  const Block = styled.div`
    ${tw`text-lg`};
  `;

  const Headline = styled.div`
    ${tw`text-base`};
  `;

  const Body= styled.div`
    ${tw`text-sm`};
  `;

  return (
      <Contents>
        <Title>profile</Title>

        <Headline>name</Headline>
        <Body>Kousuke Kageyama</Body>

        <Headline>Job</Headline>
        <Body>full stack engineer</Body>

        <Headline>Skills</Headline>
        <Body>Ruby on rails、Vue、React、Next.js、Tailwind CSS</Body>
      </Contents>
  )
}
