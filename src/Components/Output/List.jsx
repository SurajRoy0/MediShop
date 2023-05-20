import React, { useContext } from "react";
import classes from "./List.module.css";
import Item from "./Item";
import MedicineContext from "../../Store/medicine-context";

const List = () => {
  const { medicine } = useContext(MedicineContext);
  return (
    <div className={classes.wrapperStyle}>
      <div className={classes.lists}>
        {medicine.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
