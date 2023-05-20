// Form.js
import React, { useContext, useRef } from "react";
import classes from "./Form.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import MedicineContext from "../../Store/medicine-context";

const Form = () => {
  const medicineCtx = useContext(MedicineContext);
  const medicineNameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const medicineName = medicineNameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;

    if (
      medicineName.trim().length === 0 ||
      description.trim().length === 0 ||
      price.trim().length === 0
    ) {
      alert("Please Fill Up The Properly");
    } else {
      const newMedicine = {
        id: (Math.random() * 99999999).toString(),
        name: medicineName,
        description: description,
        price: +price,
      };
      medicineCtx.onSaveMedicineHandler(newMedicine);

      medicineNameRef.current.value = "";
      descriptionRef.current.value = "";
      priceRef.current.value = "";
    }
  };

  return (
    <div className={classes.wrapperStyle}>
      <form onSubmit={handleFormSubmit} className={classes.form}>
        <Input
          ref={medicineNameRef}
          type="text"
          title="Medicine Name"
          placeholder="Enter medicine name"
        />
        <Input
          ref={descriptionRef}
          type="text"
          title="Description"
          placeholder="Enter medicine description"
        />
        <Input
          ref={priceRef}
          type="number"
          title="Medicine Price ₹/Piece"
          placeholder="Enter medicine price"
        />
        <div className={classes.addButton}>
          <Button name="Add Medicine" />
        </div>
      </form>
    </div>
  );
};

export default Form;
