import styled from "styled-components";
import tw from 'tailwind.macro';
import { GetServerSideProps } from 'next';

type Blog = {
  id: number;
  title: string;
  body: string;
}

type Props = {
  blog: Blog;
}

export default (props: Props) => {
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

  const blog: Blog = props.blog;

  return (
    <BlogContents key={blog.id} >
      <Title>
        {blog.title}
      </Title>
      <Body>
        { blog.body }
      </Body>
    </BlogContents>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch(`http://api:3000/api/blogs/${context.query.id}`, {method: "GET"});
    const json = await response.json();

    return {
        props: {
            blog: json.data,
        }
    }
  } catch (e) {
      console.log(e)
      return {
          props: {
              blog: null,
          }
      }
  }
}