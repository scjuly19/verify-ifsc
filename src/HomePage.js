import React, { useState } from "react";
import Input from "./components/input";
import BankCard from "./components/bankCard";
/**response:{
    "BANK": "HDFC BANK",
    "IFSC": "HDFC0CAGSBK",
    "BRANCH": "THE AGS EMPLOYEES' CO-OP BANK LTD",
    "ADDRESS": "PARK HOUSE ROAD, BANGALORE 560001",
    "CONTACT": "2265658",
    "CITY": "BANGALORE",
    "DISTRICT": "BANGALORE URBAN",
    "STATE": "KARNATAKA",
    "RTGS": true,
    "BANKCODE": "HDFC"
}
*/
export default function HomePage() {
  const [ifsc, setIfsc] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    e.preventDefault();
    setIfsc(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const ifscCode = ifsc.toUpperCase();
    setLoading(true);
    fetch(`https://ifsc.razorpay.com/:${ifscCode}`).then((res) =>
      console.log(res)
    );
  };
  return (
    <>
      <Input value={ifsc} onSubmit={onSubmit} onChange={onInputChange} />
      {loading && <h1>Loading...</h1>}
      {data?.length > 0 && <BankCard />}
    </>
  );
}
