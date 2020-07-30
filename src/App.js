import React, { useState } from 'react';
import Provider from './provider';
import Context from './Context';

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          <h3>Agent Informatio</h3>
          <h2>Agent Name :{context.data.agent}</h2>
          <h2>Mission Name: {context.data.mname}</h2>
          <h2>Mission status: {context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>Accept</button>
          <button onClick={context.data.accept}>Denay</button>
        </>
      )}
    </Context.Consumer>
  );
};

function App() {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        {/* passing data into ajents */}
        <Agents />
      </Provider>
    </div>
  );
}

export default App;
