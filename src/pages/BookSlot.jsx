import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToReduxCartItem } from '../redux/productSlice';
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from 'react-router-dom';


const BookSlot = (props) => {
    // State variables for form inputs
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
    const [selectedWeight, setSelectedWeight] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const location = useLocation();
    
    console.log('====================================');
    // console.log(location.state);
    console.log('====================================');
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can perform any additional actions here, like sending data to a server
        await handlePaymentButton();

        // Reset form after submission
        setSelectedDate("");
        setSelectedTimeSlot("");
        setSelectedWeight("");
    };

    const dispatch = useDispatch();
	
    
    const  Id  = location.state.Id;
    const  Name = location.state.Name;
    const  Image = location.state.Image;
    const  Price = location.state.Price;
    const  Category= location.state.Category;
    console.log(Id);
	//handle add to cart
	const handleAddToCart = () => {
		dispatch(
			addToReduxCartItem({
				_id: Id,
				name: Name,
				image: Image,
				price: Price,
				category: Category,
                time:selectedTimeSlot
			})
		);
	};

    const stripeApiKey = import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY;
    //handel payment button
    const handlePaymentButton = async () => {
        const stripePromise = await loadStripe(stripeApiKey);
        const fetchData = await fetch(
            import.meta.env.VITE_APP_SERVER_DOMAIN + "payment/checkout",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: {
                    qty: selectedWeight,
                    price: selectedWeight * 100,
                    selectedDate, setSelectedTimeSlot,
                },
            }
        );

        if (fetchData.statusCode === 500) return;

        const responseData = await fetchData.json();

        toast("Redirecting to payment gateway ...");
        stripePromise.redirectToCheckout({ sessionId: responseData });
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Reservation Form</h2>

                {/* Date input */}
                <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                        Select the date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Time slot input */}
                <div className="mb-4">
                    <label htmlFor="timeSlot" className="block text-gray-700 text-sm font-bold mb-2">
                        Select the time slot
                    </label>
                    <select
                        id="timeSlot"
                        name="timeSlot"
                        value={selectedTimeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select a time slot</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>
                </div>

                {/* Weight input */}
                <div className="mb-4">
                    <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">
                        Select the weight
                    </label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={selectedWeight}
                        onChange={(e) => {setSelectedWeight(e.target.value); setTotalPrice(prev=>e.target.value*Price)}}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">
                        Total Price
                    </label>
                    <input
                        type="text"
                        id="total-price"
                        name="total-price"
                        value={totalPrice}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        contentEditable="false"
                    />
                </div>

                {/* Submit button */}
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        onClick={()=>handleAddToCart()}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BookSlot
