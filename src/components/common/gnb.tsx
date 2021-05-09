import Link from 'next/link'
import styled from "@emotion/styled";

const Nav = styled.nav`
  background: #555;
  color: #fff;
  padding: 10px 30px;

  a {
    position: relative;
    display: inline-block;

    & + a {
      padding-left: 25px;
      margin-left: 25px;
            
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 10px;
        background-color: #fff;
      }
    }
  }
`

const Gnb = () => {
  const gnbList = [
    {
      title: 'Home' ,
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'List',
      link: '/product/list'
    },
    {
      title: 'Admin',
      link: '/admin'
    },
    {
      title: 'None',
      link: '/none'
    }
  ]

  return (
    <Nav>
      {
        gnbList.map((item: {title:string, link:string}, index) => (
          <Link href={item.link} key={index}>
            <a>{item.title}</a>
          </Link>
        ))
      }
    </Nav>
  )
}

export default Gnb