import Chart from './chart';
import { data } from '../server/server'

const Parent = () => {
  return (
    <div className="App">
      <Chart data={data} />
    </div>
  );
}

export default Parent;
