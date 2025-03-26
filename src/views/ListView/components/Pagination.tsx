import { Link } from 'react-router';
import { extractOffset } from '../utils/helpers';
import './Pagination.scss';

interface Props {
  previous: string | null;
  next: string | null;
}

function Pagination({ previous, next }: Props) {
  return (
    <div className="pagination">
      {previous ? (
        <Link to={`/?offset=${extractOffset(previous)}`}>
          <button>Previous</button>
        </Link>
      ) : <button disabled>Previous</button>}
      {next ? (
        <Link to={`/?offset=${extractOffset(next)}`}>
          <button>Next</button>
        </Link>
      ) : <button disabled>Next</button>}
    </div>
  );
}

export default Pagination;
