import React from 'react';
import Definition from './Definition';

export default function Entry({
  entry,
  onClick,
  isSelected,
}) {
  return (
    <div className={`entryInner ${isSelected && 'selected'}`} onClick={onClick}>
      <div className={`main status-${entry.response && entry.response.status.toString()[0]}`}>
        {entry.url} <span className="statusCode">{entry.response ? entry.response.status : 'Error'}</span>
      </div>
      {entry.data && entry.data.map((request, i) => {
        if (request.kind !== 'FragmentDefinition') {
          return <Definition key={`request-${i}`} request={request} />;
        }
      })}
      {!entry.data && (
        <p className="error">{entry}</p>
      )}
    </div>
  );
}

Entry.propTypes = {
  entry: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
};
