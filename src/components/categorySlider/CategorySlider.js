import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";

const CategorySlider = ({ itemsList }) => {
  const { categories, categoriesSeparatedList } = useCategory();
  const [pointerRight, setPointerRight] = useState(3);
  const [pointerLeft, setPointerLeft] = useState(-1);
  const [length, setLength] = useState(4);

  // console.log("categories", categoriesSeparatedList);
  let c = categoriesSeparatedList.smartphones;

  let categoriesSeparated = [];
  let p = [];
  {
    Object.entries(categoriesSeparatedList).forEach(([key, value]) => {
      // console.log(value[0]);
      p = value.map((i) => i);
      categoriesSeparated.push(p);
    });
  }
  // console.log(categoriesSeparated);

  const moveRight = (l) => {
    setLength(l);
    // if (pointerRight >= length) {
    //   setPointerRight(3);
    //   setPointerLeft(-1);
    // }
    setPointerRight((prev) => prev + 1);
    setPointerLeft((prev) => prev + 1);
  };
  const moveLeft = (l) => {
    // if()
    setLength(l);
    // if (pointerLeft > length) {
    //   setPointerRight(3);
    //   setPointerLeft(l);
    // }
    setPointerRight((prev) => prev - 1);
    setPointerLeft((prev) => prev - 1);
  };
  const navigate = useNavigate();
  const BuyNowProduct = (product) => {
    // dispatch(addToCart(product));
    navigate(`/items/${product.id}`);
  };
  // console.log(length, "length");
  return (
    <div>
      {categoriesSeparated.map((item) => (
        <div key={item[0].id}>
          <p className="catSliderHeading">
            {item[0].category.charAt(0).toUpperCase() +
              item[0].category.slice(1)}
          </p>
          <div className="catSliderBanner">
            <button
              className="catSliderButton"
              onClick={() => moveLeft(item.length)}
              disabled={pointerLeft <= -1}
            >
              {"<"}
            </button>
            {item.map((ele, index) => {
              if (index < pointerRight && index > pointerLeft) {
                return (
                  <div className="catSliderCard" key={ele.id}>
                    <p className="catSliderBrand">{ele.brand}</p>
                    <p className="catSliderPrice">
                      <span className="catSliderCardPrice">Price</span> ₹{" "}
                      {ele.price}
                    </p>
                    <img src={ele.images[0]} className="catSliderImg" />
                    <p>{ele.title}</p>
                    <div className="catSliderButtonGrp">
                      <button
                        className="catSliderButtonBuyNow"
                        onClick={() => BuyNowProduct(ele)}
                      >
                        Buy Now
                      </button>
                      <button className="catSliderButtonSeeMore">
                        See More
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
            <button
              className="catSliderButton"
              onClick={() => moveRight(item.length)}
              disabled={pointerRight >= length}
            >
              {">"}
            </button>
          </div>
        </div>
      ))}
      {/* <div>
        {categories?.map((heading) => (
          <div>
            <p className="catSliderHeading">
              {heading.charAt(0).toUpperCase() + heading.slice(1)}
            </p>
            <div className="catSliderBanner">
              <button>{"<"}</button>

              <button>{">"}</button>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div>
        {categoriesSeparated.map((arr) => {
          arr.map((product) =>
            categories?.map((heading) =>
              product.category === heading ? (
                <>
                  {heading}
                  <li>{product.title}</li>
                </>
              ) : (
                <>{product.category}</>
              )
            )
          );
        })}
      </div> */}
    </div>
  );
};

export default CategorySlider;
