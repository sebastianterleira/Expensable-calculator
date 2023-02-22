/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Button({ children, x, y, OnChangeClick, id }){
  const color = "#06B6D4";
  function HandleClick(event){
    OnChangeClick(event.target.textContent);
  }
  return (
    <div
      css={css`
      font-family: 'Inter';
      width: 50px;
      height: 49.5px;
      text-align: center;
      background-color: white;
      font-size: 20px;
      grid-area:${x+2}/${y}/${x+2}/${y+1};
      &:hover {
        background-color: ${color};
      }
      border-top: 1px solid #E5E7EB;
      border-left: 1px solid #E5E7EB;
      border-right: 1px solid #E5E7EB;
      border-bottom: 1px solid #E5E7EB;
      line-height: 28px;
      `}
    onClick={HandleClick}
    id={id}>
      <div
      css={css`
      display: flex;
      justify-content: center;
      margin-top: 12px;
      `}
      >
      { children }
    </div>
  </div>
  )
}
