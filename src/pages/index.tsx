import React, {useState} from "react";
import Head from 'next/head';
import classNames from 'classnames/bind';
import styles from '@/assets/test.module.scss';

const cx = classNames.bind(styles)

function Heading(props: any){
  return (
    <div className="title">
      <h1 className={cx('red')}>{props.heading}</h1>
    </div>
  )
}

export default function Home() {
  const [text, setText] = useState<string>('자바스크립트')

  setTimeout(() => {
    setText('타입스크립트')
  }, 1000)

  return (
    <div className="container">
      <Heading heading="heading" />
      <div>
        <span>{text} 적용 완료</span>
      </div>
    </div>
  )
}
