import React, { useState } from 'react';

import ResourceList from './ResourceList';

// class App extends React.Component {
//   state = {
//     resourceName: 'posts',
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={() => this.setState({ resourceName: 'posts' })}>
//           Posts
//         </button>
//         <button onClick={() => this.setState({ resourceName: 'todos' })}>
//           Todos
//         </button>
//         <ResourceList resourceName={this.state.resourceName} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  const [resource, setRecource] = useState('posts');

  <React.Fragment>
    <button onClick={() => setRecource('posts')}>Posts</button>
    <button onClick={() => setRecource('todos')}>Todos</button>
    <ResourceList resourceName={this.state.resourceName} />
  </React.Fragment>;
};
export default App;
