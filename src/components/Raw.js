import React from 'react';

export default function Raw({
  query,
}) {
  return (
    <div className="response">
      <h3>Raw Query Data</h3>
      <pre>
        {query}
      </pre>
    </div>
  );
}

Raw.propTypes = {
  query: React.PropTypes.string.isRequired,
};
