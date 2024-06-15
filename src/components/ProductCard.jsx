import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookSlot from "../pages/BookSlot";
import { addToReduxCartItem } from "../redux/productSlice";
import React, { useState } from "react";


function ProductCard({ item }) {
	const { name, image, price, category, _id } = item;
	const dispatch = useDispatch();
	

	//handle add to cart
	const handleAddToCart = () => {
		dispatch(
			addToReduxCartItem({
				_id: _id,
				name: name,
				image: image,
				price: price,
				category: category,
			})
		);
	};
	const navigate =useNavigate()
	const handleChange =()=>{
		console.log(item);
		console.log('====================================');
		console.log("Hello");
		console.log('====================================');
		navigate('/bookslot',{state:{Id :_id, Name: name,Image:image,Price:price,Category:category}})
	}

	return (
		<div className="min-w-[180px] bg-white px-6 py-4 flex flex-col justify-center gap-y-1 rounded-lg">
			<Link
				to={`/menu/${_id}`}
				onClick={() =>
					window.scrollTo({ top: "0", behavior: "smooth" })
				}
			>
				<div className="min-h-[145px]">
					<img
						src={image}
						alt="product_image"
						className="w-32 h-32"
					/>
				</div>

				<h3 className="text-xl font-medium">{name}</h3>
			</Link>

			<p className="text-xs text-slate-500 font-semibold">{category}</p>
			<p className="text-black font-semibold">
				<span className="text-red-600">$</span>
				{price}
			</p>
			<button
				onClick={handleAddToCart}
				type="button"
				className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-md px-1 py-0.5"
			>
				Add to Cart
			</button>
			<button
				type="button"
				className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-md px-1 py-0.5"
				onClick={()=>handleChange()}

			>
				

				Book Slote

			</button>
		</div>
	);
}

export default ProductCard;
