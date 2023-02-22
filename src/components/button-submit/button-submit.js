/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function ButtonSubmit({ children, OnChangeClick }){
  const color = "#00aae4";
  function HandleClick(event){
    OnChangeClick(event.target.textContent);
  }
  return (
    <div
      css={css`
      font-family: 'Inter';
      width: 50px;
      height: 99.5px;
      text-align: center;
      background-color: #06B6D4;
      font-size: 20px;
      grid-area: 5 / 5 / 7 / 6;
      &:hover {
        background-color: ${color};
      }
      border-top: 1px solid #E5E7EB;
      border-bottom: 1px solid #E5E7EB;
      border-left: 1px solid #E5E7EB;
      border-right: 1px solid #E5E7EB;
		  font-family: 'Inter', sans-serif;
      `}
      onClick={HandleClick} id="js-submit">
        <div
      css={css`
      display: flex;
      justify-content: center;
      margin-top: 35px;
      `}
      >
      { children }
    </div>
  </div>
  )
}
