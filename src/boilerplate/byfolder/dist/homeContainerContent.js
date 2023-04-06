const homeContainerContent = `import React from 'react';
import Home from './Home';

const HomeContainer = (props) => {
  const { heading, text } = props;

  return <Home heading={heading} text={text} />;
};

export default HomeContainer;
`;
module.exports = { homeContainerContent };
