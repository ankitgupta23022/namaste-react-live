import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem, addCartTotalPrice } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Logo from "../assets/img/foodvilla.png";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const handleAddFoodItem = (item) => {
    dispatch(addItem(item));
    dispatch(addCartTotalPrice(item.price / 100));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex w-auto flex-wrap ">
        <div className="flex space-x-52 pt-3 pl-3">
          <h2>
            {"Restaurant Name:- " +
              restaurant?.cards[0]?.card?.card?.info?.name}
          </h2>
          <h3>
            {"Restaurant Area:- " +
              restaurant?.cards[0]?.card?.card?.info?.areaName}
          </h3>
          <h3>
            {"Restaurant City:- " +
              restaurant?.cards[0]?.card?.card?.info?.city}
          </h3>
          <h3>
            {"Restaurant Rating:- " +
              restaurant?.cards[0]?.card?.card?.info?.avgRating}{" "}
            stars
          </h3>
        </div>

        <div className="mx-auto flex flex-wrap pt-2">
          {Object.values(
            restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ??
              {}
          ).map((item) => {
            return (item?.card?.card?.itemCards ?? []).map((items) => (
              <div
                className="p-2 md:w-1/6 float-left"
                key={Math.floor(Math.random() * 10000)}
              >
                <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48  md:h-36 w-full object-cover object-center"
                    src={
                      items.card.info.imageId
                        ? IMG_CDN_URL + items.card.info.imageId
                        : Logo
                    }
                  />
                  <div className="p-6">
                    <h2 className="w-auto mb-4 h-6">
                      {items?.card?.info?.name}
                    </h2>
                    <h1 className="w-auto mb-4 h-6">
                      {items?.card?.info?.finalPrice / 100
                        ? "Price:- Rs. " + items?.card?.info?.finalPrice / 100
                        : "Price:- Check In Cart"}
                    </h1>
                    <h1 className="w-auto mb-4 h-6">
                      {items?.card?.info?.ratings?.aggregatedRating?.rating
                        ? "Rating:- " +
                          items?.card?.info?.ratings?.aggregatedRating?.rating
                        : "Rating:- " + 0}
                    </h1>
                    <h1 className="w-auto mb-4 h-6">
                      {"Type:- " +
                        items?.card?.info?.itemAttribute?.vegClassifier}
                    </h1>
                    <button
                      data-testid="addBtn"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      onClick={() => handleAddFoodItem(items?.card?.info)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    </>

    // <div className="flex">
    //   <div>
    //     <h1>Restaurant id: {restaurant?.cards[0]?.card?.card?.info?.id}</h1>
    //     <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
    //     <img
    //       src={
    //         IMG_CDN_URL +
    //         restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
    //       }
    //     />
    //     <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
    //     <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
    //     <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
    //     <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMsg}</h3>
    //   </div>
    //   <div className="p-5">
    //     <h1>Menu</h1>
    //     <ul data-testid="menu">
    //       {Object.values(
    //         restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ??
    //           {}
    //       ).map((item) => {
    //         return (item?.card?.card?.itemCards ?? []).map((items) => (
    //           <li key={items.card.info.id}>
    //             {items.card.info.name} -{" "}
    //             <button
    //               data-testid="addBtn"
    //               className="p-1 bg-green-50"
    //               onClick={() => addFoodItem(items?.card?.info)}
    //             >
    //               Add
    //             </button>
    //           </li>
    //         ));
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default RestaurantMenu;
