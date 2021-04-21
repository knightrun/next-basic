import Link from 'next/link'
import styled from "@emotion/styled";

const Nav = styled.nav`
    background: #555;
    color: #fff;
    padding: 10px 30px;
    a{
        position: relative;
        display: inline-block;
        & + a{
            padding-left: 25px;
            margin-left: 25px;
            
            &:before{
                content: '';
                display: block;
                position: absolute;
                left:0;
                top:50%;
                transform: translateY(-50%);
                width:1px;
                height:10px;
                background-color: #fff;
            }
        }
    }
`

const Gnb = () => (
  <Nav>
    <Link href="/">
      <a>Home</a>
    </Link>

    <Link href="/product/list">
      <a>List</a>
    </Link>

    <Link href="/none">
      <a>None</a>
    </Link>
  </Nav>
)

export default Gnb