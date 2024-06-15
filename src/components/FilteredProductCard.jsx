import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToReduxCartItem } from "../redux/productSlice";

export default function FilteredProductCard({
	name,
	image,
	price,
	category,
	loading,
	_id,
}) {
	const navigate =useNavigate()
	const dispatch = useDispatch();
	//handle add to cart
	const handleAddToCart = () => {
		dispatch(
			addToReduxCartItem({
				_id,
				name,
				image,
				price,
				category,
			})
		);
	};
const handleChange =()=>{
		// console.log(item);
		// console.log('====================================');
		// console.log("Hello");
		// console.log('====================================');
		navigate('/bookslot',{state:{Id :_id, Name: name,Image:image,Price:price,Category:category}})
	}
	return (
		<div className="w-[180px] bg-white px-6 py-4 flex flex-col justify-center gap-y-1 rounded-lg">
			{image ? (
				<>
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

					<p className="text-xs text-slate-500 font-semibold">
						{category}
					</p>
					<p className="text-black font-semibold">
						<span className="text-red-600">$</span>
						{price}
					</p>
					<button
						type="button"
						className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-md px-1 py-0.5"
						onClick={handleAddToCart}
					>
						Add to Cart
					</button>
					<button
						type="button"
						className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-md px-1 py-0.5"
						onClick={()=>handleChange()}

					>
						{/* <Link to="bookslot">Book Slota</Link> */}
						book Stot

					</button>
				</>
			) : (
				<div className="min-h-[150px] flex justify-center items-center animate-pulse bg-gray-200 video">
					<p>{loading}</p>
				</div>
			)}
		</div>
	);
}
