import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styledElements/styleGuid';

const ListRow = styled.div`
  /* width: 100%; */
  height: 80px;
  border-radius: 20px;
  background-color: ${colors.white};
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const WorkSummeryListItem = ({ week }) => (
  <ListRow>
    <span>{`${week.week} | `}</span>
    <span>{`Hrs ${week.hours} | `}</span>
    <span>{`Per Hr $${week.wage}${week.wage % 10 === 0 ? '.00' : ''} | `}</span>
    <span>{`Total $${week.total}${week.total % 10 === 0 ? '.00' : ''}`}</span>
  </ListRow>
);

export default WorkSummeryListItem;
