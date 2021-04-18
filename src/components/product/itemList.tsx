import Link from "next/link";
import {css, jsx} from '@emotion/react'

const itemWrap = css`
  width: 800px;
  margin: 0 auto;
  overflow: hidden;
`

const itemList = css`
  float: left;
  width: 33.333%;
  padding: 30px;

  &:after {
    content: '';
    display: block;
    clear: both;
  }

  .txt_wrap {
    height: 40px;
    overflow: hidden;
  }
`


const ItemList = ({list}) => (
  <div>
    <ul css={itemWrap}>
      {
        list.length && list.map((item, index) => (
          <li css={itemList} key={index}>
            <Link href={`/product/${item.id}`}>
              <a>
                <div className="image_wrap">
                  <img src={item.image_link} alt={item.name}/>
                </div>
                <div className="txt_wrap">
                  <span>{item.name}</span>
                </div>
              </a>
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default ItemList