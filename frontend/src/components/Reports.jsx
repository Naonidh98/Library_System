import React ,{useState} from "react";
import MasterBooks from "../form3/MasterBooks";
import MasterMembers from "../form3/MasterMembers";
import MasterIssue from "../form3/MasterIssue";
const Reports = ()=>{

    const [books,setBooks] = useState(false);
    const [memberships,setMemberships] = useState(false);

    const [issues,setActiveIssue] = useState(false);
    const [overdue,setOverdue] = useState(false);


    return <div className="w-[80%] mx-auto">

        <div>
        <p
          className="text-[#03045e] cursor-pointer" onClick={()=>{setOverdue(false); setActiveIssue(false); setMemberships(false); setBooks(true);}}> Master List of Books
        </p>
        <div>
            {
                books && <p><MasterBooks setBooks={setBooks}/></p>
            }
        </div>
        </div>

        <div>
        <p
          className="text-[#03045e] cursor-pointer" onClick={()=>{setOverdue(false); setActiveIssue(false); setMemberships(true); setBooks(false);}}> Master List of Memberships
        </p>
        <div>
            {
                memberships && <p><MasterMembers setMemberships={setMemberships}/></p>
            }
        </div>
        </div>

        <div>
        <p
          className="text-[#03045e] cursor-pointer" onClick={()=>{setOverdue(false); setActiveIssue(true); setMemberships(false); setBooks(false);}}> Active Issues
        </p>
        <div>
            {
                issues && <p><MasterIssue setActiveIssue={setActiveIssue}/></p>
            }
        </div>
        </div>

        {
            /* <div>
        <p
          className="text-[#03045e] cursor-pointer" onClick={()=>{setOverdue(true); setActiveIssue(false); setMemberships(false); setBooks(false);}}> Overdue returns
        </p>
        <div>
            
                overdue && <p>Overdue</p>
           
        </div>
        </div> */
        }

</div>
}

export default Reports;