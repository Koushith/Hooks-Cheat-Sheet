import React, { useState } from 'react';

const GrandChild = ({ brand }) => {
  return (
    <div>
      <h3>Grand Child:</h3>
      <Child brand={brand} />
    </div>
  );
};

const Child = ({ brand }) => {
  return (
    <div>
      <h2>Child :{brand}</h2>
    </div>
  );
};

function App() {
  const [brandName] = useState('Amazon');
  return (
    <div>
      <GrandChild brand={brandName} />
    </div>
  );
}

export default App;
