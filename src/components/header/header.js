/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Header({children}) {
  return (
		<nav css = {css`display: flex;   
		align-items: center; 
		background-color: #06B6D4;
		padding: 8px;
		padding-bottom: 5px;
    	padding-top: 5px;
		padding-left: 12px;
		font-family: 'Inter', sans-serif;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		grid-area:1/2/1/5;
		`}>
			<div css = {css `background-color: white;
			padding-left: 10px;
			padding-top: 11.25px; 
			padding-right: 11.25px; 
			padding-bottom: 10px; 
			border-radius: 50%;
			margin-right: 8px;
			`}>
			<i className="ri-shopping-cart-line"></i>
			</div>
			<div css = {css`display: flex; flex-direction: column;`}>
				<div>
			<label css = {css`color: white; font-size: 8px; line-height: 16px; `}>Add expense to</label>
				</div>
				<div>
			<label css = {css`color: white; font-size: 13px; line-height: 24px; font-weight: 500;`}>Groceries</label>
				</div>
			</div>
			<div css = {css `
				color: white;
				margin-left: 100px;
				font-size: 26px;
			`}>
				<i className="ri-close-line"></i>
			</div>
			{children}
		</nav>
	);
}