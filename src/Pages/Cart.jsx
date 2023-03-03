import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Store/Slice/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
const [total,settotal]=useState()
  const cartitem = useSelector((state) => {
    console.log(state.cart);
    return state.cart;
  });
  useEffect(() => {
    settotal(
      cartitem.reduce((int, neW) => int + Number(neW.price), 0)
    );
  }, [cartitem]);
  const deleteItem = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div style={{height:'110vh'}}>
      <h3 style={{textAlign:'center'}}>Cart🛒</h3>
      
      <div style={{width:"60vw"}} className=" tbl container-fluid">
        <table className="table table-borderless ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;Delete</th>
            </tr>
          </thead>

          {cartitem?.map((item, index) => {
            return (
              <tbody>
                <tr>
                  <td>
                    {index+1}
                  </td>
                  <td>
                    {" "}
                    <img
                      style={{ height: 50, width: "auto" }}
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>
                    {" "}
                    <h6>{item.title.substring(0, 13) + "..."}</h6>
                  </td>
                  <td>
                    <h6>{item.price.toFixed(0)}/-</h6>
                  </td>

                  <td>
                    <div className="col-sm">
                      <button
                        onClick={() => deleteItem(item.id)}
                        type="button"
                        className="btn btn-danger btn-sm "
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}

        </table>
        {(cartitem.length===0)?<h6 style={{textAlign:'center',margin:"auto"}}>Cart is Empty !</h6>: null}
      </div>
        <h4 style={{textAlign:'center'}}>Tolal Price {total?.toFixed(0)} /-</h4>
    </div>
  );
};

export default Cart;
