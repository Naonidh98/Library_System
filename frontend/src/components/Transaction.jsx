import React, { useState } from "react";
import BookAvail from "../forms2/BookAvail";
import BookIssue from "../forms2/BookIssue";


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
            setReturn(true);
          }}
        >
          Return book ?
        </p>
        <div>
          {returns && (
            <div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
              <h2 className="underline">Return Book</h2>

              <form>
                <div className="py-2">
                  <label htmlFor="id">Enter Book Name : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Enter Author Name : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Issue Date : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Return Date : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Remarks : </label>
                  <input
                    type="textarea"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </form>

              <div className="w-full flex justify-evenly">
                <button
                  onClick={() => {
                    setReturn(false);
                  }}
                  className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Cancel
                </button>
                <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <p
          className="text-[#03045e]"
          onClick={() => {
            setfine(true);
          }}
        >
          Pay fine ?
        </p>
        <div>
          {fine && (
            <div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
              <h2 className="underline">Pay fine</h2>

              <form>
                <div className="py-2">
                  <label htmlFor="id">Enter Book Name : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Enter Author Name : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Enter Serial Number : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Issue Date : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Return Date : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Actual Return Date : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Fine calculate : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Fine paid : </label>
                  <input
                    type="text"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="id">Remarks : </label>
                  <input
                    type="textarea"
                    placeholder="Admin"
                    id="id"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </form>

              <div className="w-full flex justify-evenly">
                <button
                  onClick={() => {
                    setfine(false);
                  }}
                  className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Cancel
                </button>
                <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
