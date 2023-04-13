import { IMG_CDN_URL } from "../contants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
<>
<div className="flex w-auto flex-wrap ">
    <div className="mx-auto flex flex-wrap pt-2">
          <div className="p-2 md:w-[315px] float-left">
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
              <img
                className="lg:h-48  md:h-36 w-full object-cover object-center"
                src={
                  IMG_CDN_URL + cloudinaryImageId
                }
              />
              <div className="p-6">
                <h2 className="w-auto mb-4 h-6">{name}</h2>
                <h1 className="w-auto mb-4 h-6">{cuisines.join(", ")}</h1>
                <h1 className="w-auto mb-4 h-6">{"Distance:- "+lastMileTravelString}</h1>
                <h1 className="w-auto mb-4 h-6">{user.name} - {user.email}</h1>
              </div>
            </div>
          </div>
          </div>
    </div>
    </>

    // <div className="w-64 p-2 m-2 shadow-lg bg-pink-50">
    //   <img src={IMG_CDN_URL + cloudinaryImageId} />
    //   <h2 className="font-bold text-xl">{name}</h2>
    //   <h3>{cuisines.join(", ")}</h3>
    //   <h4>{lastMileTravelString}</h4>
    //   <h5 className="font-bold">
    //     {user.name} - {user.email}
    //   </h5>
    // </div>


  );
};

export default RestrauntCard;
