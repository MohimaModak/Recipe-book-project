import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import "./AddToCart.css";
import photo from "../../../assets/Gallery/money.png";
const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);
  const [paymentNumber, setPaymentNumber] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [NIDNumber, setNIDNumber] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:4000/appFoodsOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const totalPrice = cart.reduce((sum, cartItem) => {
    const itemPrice = parseFloat(cartItem.food.price);
    return !isNaN(itemPrice) ? sum + itemPrice : sum;
  }, 0);

  const payement = totalPrice.toFixed(2);
  console.log(payement);

  const handlePayment = () => {
    setPaymentConfirmed(true);
    setNIDNumber(true);
  };

  return (
    <>
      <div>
        {cart.length === 0 ? (
          <>
            <h1 className="text-center text-2xl font-bold">
              Hungry individuals facing financial constraints can access food
              through various food apps on my website. The food prices are
              displayed, and users can provide their Payoneer number, phone
              number, or other payment details. Once the money is transferred to
              their card, the owed amount for the food will be deducted
              accordingly.
            </h1>
            <div className="flex justify-center items-center m-16">
              <div className=" p-2 bg-red-700 text-white font-semibold rounded-md w-max">
                <Link to={"/FoodLoan"}>Food Loan</Link>
              </div>
            </div>
          </>
        ) : (
          <div className="lg:flex justify-between lg:gap-10 rounded-md">
            {!paymentNumber ? (
              <div className="">
                <div className="flex justify-center items-center">
                  <img src={photo} className="" />
                </div>{" "}
                <p className="text-2xl fooddetails text-blue-400 ">
                  Your meal will not be confirmed until you give us your payment
                  details and you NID number.
                </p>
                <div>
                  {!paymentConfirmed && (
                    <div className="">
                      <h2 className="text-3xl foodPara text-blue-400">
                        Enter Payment Details
                      </h2>
                      <form>
                        <label
                          htmlFor="paymentNumber"
                          className="foodPara text-blue-400  text-xl"
                        >
                          NID Number:
                        </label>
                        <br />
                        <input
                          type="text"
                          id="paymentNumber"
                          name="NIDNumber"
                          onChange={(e) => setNIDNumber(e.target.value)}
                          className="border text-xl foodPara text-blue-400 p-2 mb-4 mt-4 rounded-xl"
                        />
                        <br />
                        <label
                          htmlFor="paymentNumber"
                          className="text-xl foodPara text-blue-400 "
                        >
                          Card Number:
                        </label>
                        <br />
                        <input
                          type="text"
                          id="paymentNumber"
                          value={paymentNumber}
                          onChange={(e) => setPaymentNumber(e.target.value)}
                          className="border foodPara text-blue-400 p-2 mb-4 mt-4 rounded-xl"
                        />
                        <br />
                      </form>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-blue-400 sm:text-2xl md:text-2xl lg:text-3xl fooddetails">
                  <span className="text-orange-300 sm:text-5xl md:text-4xl lg:text-6xl">
                    Congratulations!
                  </span>{" "}
                  Your order has been successfully confirmed.
                </h1>
                <p className="text-blue-400 foodPara pt-10">
                  Congratulations on successfully placing your order and
                  satisfying your hunger through our platform. We understand
                  that circumstances may vary, and financial constraints can
                  sometimes make accessing food a challenge. We're here to
                  support you during those times. By using our service, you've
                  accessed a food loan that allows you to enjoy a satisfying
                  meal when you need it most. We want to remind you that this is
                  a loan, and just like any other loan, it's important to repay
                  it when you're able to. Your trust in us to provide you with
                  nourishment during difficult times means a lot, and we hope
                  that when you're in a better financial position, you'll
                  consider paying it forward to help others in need. Thank you
                  for choosing our platform and being a part of our community.
                  We're here to help you navigate through life's challenges, one
                  meal at a time.
                </p>
                <p className="text-blue-400 foodPara pt-5">
                  Thank you for choosing our platform and being a part of our
                  community. We're here to help you navigate through life's
                  challenges, one meal at a time.
                </p>
                <p className="text-blue-400 foodPara pt-5">Warm regards,</p>
                <p className="text-blue-400 foodPara pt-5 text-2xl">
                  Global food
                </p>
              </div>
            )}

            <div className="flex justify-center items-center">
              <div className="">
                <>
                  <div className="border rounded-2xl w-max backdrop-blur-2xl shadow-2xl">
                    <h1 className=" text-4xl text-center p-10 fooddetails text-orange-300 underline">
                      Food Loan Summary
                    </h1>
                    <table className="">
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item._id} className="shadow-md">
                            <td className="p-3">
                              <img
                                src={item.food.food_image}
                                alt={item.food.Name}
                                className="w-16 h-16 rounded-full"
                              />
                            </td>
                            <td className="p-3 foodPara text-blue-400 text-xl">
                              {item.food.Name}
                            </td>
                            <td className="p-3 foodPara text-blue-400 text-xl">
                              {item.food.appName}
                            </td>
                            <td className="p-3 foodPara text-blue-400 text-xl">
                              {item.food.price} $
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className="">
                      <h1 className="p-7 foodPara text-blue-400 text-2xl text-center">
                        Total price: {payement} $
                      </h1>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddToCart;
