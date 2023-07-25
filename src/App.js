import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import data from './data.json';
import './style.css';

const columns = [
  {
    name: 'links',
    selector: 'link'
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Phone',
    selector: 'phone',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'DOB',
    selector: 'dob',
  }
];

const customStyles = {
  cells: {
    style: {
      border: '1px solid red', // Add red border to cells
    },
  },
};

function App() {
  const [searchText, setSearchText] = useState('');
  data = data.map(ele => {
    return {
      ...ele,
      link: <a href='https://www.google.com/' target='_blank'>testing</a>
    }
  })

  // Filter the data based on the search text
  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className="App">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
      <DataTable
        title="SPT Table"
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        className="red-bordered-table"
        customStyles={customStyles}
      />
    </div>
  );
}

export default App;
