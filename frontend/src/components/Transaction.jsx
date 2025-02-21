import React, { useState } from "react";
import BookAvail from "../forms2/BookAvail";
import BookIssue from "../forms2/BookIssue";
import BookReturn from "../forms2/BookReturn";
import BookFine from "../forms2/BookFine";

const Transaction = () => {
  const [avail, setAvail] = useState(false);
  const [issue, setIssue] = useState(false);
  const [returns, setReturn] = useState(false);
  const [fine, setfine] = useState(false);
  const [results, setResults] = useState(false);

  return (
    <div className="w-[80%] mx-auto">
      <div>
        <p
          className="text-[#03045e] cursor-pointer"
          onClick={() => {
            setIssue(false);
            setReturn(false);
            setfine(false);
            setAvail(true);
          }}
        >
          Is book available ?
        </p>
        <div>
          {avail && (
            <BookAvail setAvail={setAvail}/>
          )}
        </div>

        
      </div>
      <div>
        <p
          className="text-[#03045e]"
          onClick={() => {
            setReturn(false);
            setfine(false);
            setAvail(false);
            setIssue(true);
          }}
        >
          Issue book ?
        </p>
        <div>
          {issue && (
            <BookIssue setIssue={setIssue}/>
          )}
        </div>
      </div>
      <div>
        <p
          className="text-[#03045e]"
          onClick={() => {
            setfine(false);
            setAvail(false);
            setIssue(false);
            setReturn(true);
          }}
        >
          Return book ?
        </p>
        <div>
          {returns && (
            <BookReturn setReturn={setReturn}/>
          )}
        </div>
      </div>
      <div>
        <p
          className="text-[#03045e]"
          onClick={() => {
            setAvail(false);
            setIssue(false);
            setReturn(false);
            setfine(true);
          }}
        >
          Pay fine ?
        </p>
        <div>
          {fine && (
           <BookFine setfine={setfine}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
