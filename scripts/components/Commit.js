import React, { PropTypes } from 'react';

const height = 30;

const Commit = ({ maxLane, index, lane, message, parents, id, avatarUrl }) => (
  <g transform={`translate(0, ${index * height})`}>
    {parents.map(p => {
      if (lane === p.lane) {
        return <path key={p.index} fill="none" stroke-width="2" d={`M${lane * 15 + 10},15 v${(p.index - index) * height}`} stroke="#000000"></path>
      }
      if (lane < p.lane) {
        return <path key={p.index} fill="none" stroke-width="2" d={`M${lane * 15 + 10},15 l5,5 h${(p.lane - lane) * 15 - 5} v${(p.index - index) * height - 5}`} stroke="#000000" markerEnd={'url(#arr)'}></path>
      }
      return <path key={p.index} marker-end="url(#arr)" fill="none" stroke-width="2" d={`M${lane * 15 + 10},15 v${(p.index - index) * height} h${(p.lane - lane) * 15}`} stroke="#000000"></path>
    })}
    <rect x={maxLane * 30} y="5" width="20" height="20" stroke="#a3c5cc" fill="none" stroke-width="2"></rect>
    <circle cx={lane * 15 + 10} cy="15" r="3" onClick={() => {location.href = `./commit/${id}`}}></circle>
    <image x={maxLane * 30} y="5" width="20" height="20" preserveAspectRatio="none" href={avatarUrl} ></image>
    <text x={maxLane * 30 + 30} y="15" width="20" height="20" fill="#000000" stroke-width="2" font="14px">
      <tspan dy="5">{message}</tspan>
    </text>
  </g>
);

Commit.propTypes = {
  maxLane: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  lane: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  parents: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    lane: PropTypes.number.isRequired
  })).isRequired,
  id: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired
};

export default Commit;
