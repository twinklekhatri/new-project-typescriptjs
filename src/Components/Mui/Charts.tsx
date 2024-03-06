import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 5, marking: 'A' },
  { value: 10, marking: 'B' },
  { value: 15, marking: 'C' },
  { value: 20, marking: 'D' },
];
const sizing = {
  width: 400,
  height: 200,
};
 function Charts() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.marking} (${item.value})`, 
          arcLabelMinAngle: 45, 
          data, 
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold', 
        },
      }}
      {...sizing} 
    />
  );
}
export default Charts;