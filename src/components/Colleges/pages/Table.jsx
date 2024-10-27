import React from 'react';
import './Table.css';

const Table = () => {
  const tuitionFee = 260000;
  const hostelFee = 12000; // Assuming this as an example, update if needed
  const totalYears = 6;
  const totalCoursePackage = tuitionFee * totalYears;
  const totaltutionPackage = hostelFee * totalYears;
  const total=totaltutionPackage+totalCoursePackage;
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Fees Structure</th>
            <th>1st Year</th>
            <th>2nd Year</th>
            <th>3rd Year</th>
            <th>4th Year</th>
            <th>5th Year</th>
            <th>6th Year</th>
            <th>Total Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tuition Fee(ruble)</td>
            {/* <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td> */}
           
            <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td>
            <td>{` ${tuitionFee} ruble`}</td>
            <td rowSpan={2}>{` ${total} ruble`}</td> 
          </tr>
          <tr>
            <td>Hostel Fee(ruble) </td>
            {/* <td colSpan={7}>INCLUDING HOSTEL</td> */}
            <td>{` ${hostelFee} ruble`}</td>
            <td>{` ${hostelFee} ruble`}</td>
            <td>{` ${hostelFee} ruble`}</td>
            <td>{` ${hostelFee} ruble`}</td>
            <td>{` ${hostelFee} ruble`}</td>
            <td>{` ${hostelFee} ruble`}</td>
            {/* <td>{`$ ${total} `}</td> */}
            
          </tr>
          {/* <tr>
            <td>Total course fees including hostel </td>
            <td colSpan={7} > $ {total} </td>
           
            
          </tr> */}
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
