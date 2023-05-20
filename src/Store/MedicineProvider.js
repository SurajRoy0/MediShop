import React, { useState } from 'react'
import MedicineContext from './medicine-context'

const demoItems = [
  {
    id: "m1",
    name: "Aspirin",
    description: "Pain reliever and fever reducer",
    price: 10,
  },
  {
    id: "m2",
    name: "Ibuprofen",
    description: "Nonsteroidal anti-inflammatory drug (NSAID)",
    price: 8,
  },
  {
    id: "m3",
    name: "Paracetamol",
    description: "Analgesic and antipyretic medication",
    price: 5,
  },
  {
    id: "m4",
    name: "Cough Syrup",
    description: "Relieves cough symptoms",
    price: 12,
  },
  {
    id: "m5",
    name: "Antibiotic",
    description: "Fights bacterial infections",
    price: 20,
  },
  {
    id: "m6",
    name: "Antihistamine",
    description: "Relieves allergy symptoms",
    price: 15,
  },
  {
    id: "m7",
    name: "Vitamin C",
    description: "Boosts immune system",
    price: 7,
  },
  {
    id: "m8",
    name: "Antacid",
    description: "Relieves heartburn and indigestion",
    price: 9,
  },
  {
    id: "m9",
    name: "Antidiarrheal",
    description: "Treats diarrhea symptoms",
    price: 11,
  },
  {
    id: "m10",
    name: "Antiemetic",
    description: "Prevents and relieves nausea and vomiting",
    price: 14,
  },
];



const MedicineProvider = (props) => {
  const [medicine, setMedicine] = useState(demoItems);
  const onSaveMedicineHandler = (data) => {
    setMedicine(prev => [data, ...prev])
  }
  return (
    <MedicineContext.Provider value={{ medicine, onSaveMedicineHandler }} >{props.children}</MedicineContext.Provider>
  )
}

export default MedicineProvider;