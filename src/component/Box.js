import React from 'react'

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""  ) {
  // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {// 위의 경우가 아니라면 props&nbsp;로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      {props.item && (
        <img className='item-img' alt='이미지' src={props.item && props.item.img}/>
      )}
      <h2>{result}</h2>
    </div>
  )
}

export default Box