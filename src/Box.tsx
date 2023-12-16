import React from 'react'
import Style from "./Box.module.scss";

interface Props {
    text: string;
    onClick: () => void;
}

const Box = ({text, onClick}: Props) => {
    if (['AC'].includes(text)) {
        return <div onClick={onClick} className={Style.redBoxContainer}>{text}</div>
    }
    if (['='].includes(text)) {
        return <div onClick={onClick} className={Style.bigBoxContainer}>{text}</div>
    }
  return (
    <div onClick={onClick} className={Style.boxContainer}>{text}</div>
  )
}

export default Box