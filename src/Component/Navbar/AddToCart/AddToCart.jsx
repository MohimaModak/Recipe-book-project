import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

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
          <div className="lg:flex justify-between gap-10 items-center bg-gray-100 p-10 rounded-md">
            {!paymentNumber ? (
              <div className="">
                <p className="text-2xl font-medium">
                  Your meal will not be confirmed until you give us your payment
                  details and you NID number.
                </p>
                <div>
                  {!paymentConfirmed && (
                    <div className="">
                      <h2 className="text-xl font-bold mt-4 mb-4">
                        Enter Payment Details
                      </h2>
                      <form>
                        <label htmlFor="paymentNumber" className=" font-medium">
                          NID Number:
                        </label>
                        <br />
                        <input
                          type="text"
                          id="paymentNumber"
                          name="NIDNumber"
                          onChange={(e) => setNIDNumber(e.target.value)}
                          className="border p-2 mb-4 mt-4 rounded-xl"
                        />
                        <br />
                        <label htmlFor="paymentNumber" className=" font-medium">
                          Card Number:
                        </label>
                        <br />
                        <input
                          type="text"
                          id="paymentNumber"
                          value={paymentNumber}
                          onChange={(e) => setPaymentNumber(e.target.value)}
                          className="border p-2 mb-4 mt-4 rounded-xl"
                        />
                        <br />
                      </form>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/order-confirmed-concept-illustration_353829-159.jpg"
                  className="rounded-md shadow-2xl"
                  srcset=""
                />
              </div>
            )}

            <div className="flex justify-center items-center">
              <div className="">
                <>
                  <h1 className="font-semibold text-2xl p-3">
                    Food Loan Summary
                  </h1>
                  <div className="border rounded-md w-max bg-white shadow-2xl">
                    <table>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item._id} className="border-b font-medium">
                            <td className="p-3">
                              <img
                                src={item.food.food_image}
                                alt={item.food.Name}
                                className="w-16 h-16 rounded-full"
                              />
                            </td>
                            <td className="p-3">{item.food.Name}</td>
                            <td className="p-3">{item.food.appName}</td>
                            <td className="p-3">{item.food.price} $</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="">
                    <h1 className="text-center text-2xl">
                      Total price: {payement} $
                    </h1>
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
