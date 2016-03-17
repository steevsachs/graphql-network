import React from 'react';
import CollapsableObject from './CollapsableObject';

export default function Response({
  response,
}) {
  return (
    <div className="response">
      <h3>Response</h3>
      <div className="responseJson">
        <CollapsableObject
          object={JSON.parse(response)}
          topLevel
          open
        />
      </div>
    </div>
  );
}

Response.propTypes = {
  response: React.PropTypes.string.isRequired,
};
