import styled from "styled-components";
import tw from 'tailwind.macro';

type Blog = {
  id: number;
  title: string;
  body: string;
}

type Props = {
  blogs: Blog[];
}

export default (props: Props ) => {
  const BlogContents = styled.div`
    min-height: 200px;
    width: 200px;
    ${tw`rounded`};
    ${tw`shadow`};
    ${tw`mb-10`};
  `;

  const Title = styled.div`
  `;

  const Body = styled.div`
  `;

  const blogItems: JSX.Element[] = props.blogs.map((blog) =>
    <BlogContents key={blog.id} >
      <Title>
        { blog.title }
      </Title>
      <Body>
        { blog.body }
      </Body>
    </BlogContents>
  );

  return (
      <div>
        ブログ一覧
        { blogItems }
      </div>
  )
}

export async function getServerSideProps () {
  try {
    const response = await fetch("http://api:3000/api/blogs", {method: "GET"});
    const json = await response.json();

    return {
        props: {
            blogs: json.data,
        }
    }
  } catch (e) {
      console.log(e)
      return {
          props: {
              blogs: [],
          }
      }
  }
}