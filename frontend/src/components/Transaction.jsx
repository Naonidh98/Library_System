import React, { useState } from "react";

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
            setAvail(true);
          }}
        >
          Is book available ?
        </p>
        <div>
          {avail && (
            <div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
              <h2 className="underline"> Book Available</h2>

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
              </form>

              <div className="w-full flex justify-evenly">
                <button
                  onClick={() => {
                    setAvail(false);
                  }}
                  className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Back
                </button>
                <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Search
                </button>
              </div>
            </div>
          )}
        </div>

        <div>
          {results && (
            <div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
              <h2 className="underline"> Results Book Available</h2>

              <table class="table-auto mx-auto mt-8">
                <thead>
                  <tr>
                    <th className="border  border-2 border-black min-w-[150px]">
                      Book Nmae
                    </th>
                    <th className="border  border-2 border-black min-w-[150px]">
                      Author Name
                    </th>
                    <th className="border  border-2 border-black min-w-[150px]">
                      Serial Number
                    </th>
                    <th className="border  border-2 border-black min-w-[150px]">
                      Available
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>

              <div className="w-full flex justify-evenly">
                <button
                  onClick={() => {}}
                  className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Search
                </button>
                <button className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Cancel
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
            setIssue(true);
          }}
        >
          Issue book ?
        </p>
        <div>
          {issue && (
            <div className="min-w-[350px] m-6 border border-4 border-black p-2 rounded">
              <h2 className="underline"> Book issue</h2>

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
                    setIssue(false);
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
