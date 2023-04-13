import { IMG_CDN_URL } from "../contants";
import { deleteItemById, subCartTotalPrice } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const FoodItem = ({ id, name, description, imageId, price }) => {
  const dispatch = useDispatch();

  const deleteFoodItem = (itemId) => {
    dispatch(deleteItemById(itemId));
  };

  const subtractCartTotalPrice = (price) => {
    dispatch(subCartTotalPrice(price));
  };

  const handleDeleteFoodItem = (id, price) => {
    deleteFoodItem(id);
    subtractCartTotalPrice(price);
  };

  return (
    <>
      <div className="flex w-auto flex-wrap float-left">
        <div className="">
          <div
            className="p-2 float-left"
            key={Math.floor(Math.random() * 10000)}
          >
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
              <img
                className="lg:h-48  md:h-36 w-full object-cover object-center"
                src={IMG_CDN_URL + imageId}
              />
              <div className="p-6">
                <h2 className="w-auto mb-4 h-6">{name}</h2>
                {/* <h1 className="w-[250px] mb-4 h-6">{description}</h1> */}
                <h1 className="w-auto mb-4 h-6">Rs. {price / 100}</h1>
                <button
                  data-testid="addBtn"
                  className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => handleDeleteFoodItem(id, price / 100)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="flex w-auto flex-wrap ">
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
        </div> */
}

{
  /* <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
    //   <img src={IMG_CDN_URL + imageId} />
    //   <h2 className="font-bold text-xl">{name}</h2>
    //   <h3>{description}</h3>
    //   <h4>Rupees: {price / 100}</h4>
    //   <button className="bg-red-100 p-2" onClick={()=>handleDeleteFoodItem(id,price/100)}>
    //     Delete
    //   </button>
    // </div> */
}

export default FoodItem;
