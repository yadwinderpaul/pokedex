import { Link } from 'react-router';
import { extractOffset } from '../utils/helpers';

interface Props {
  previous: string | null;
  next: string | null;
}

function Pagination({ previous, next }: Props) {
  return (
    <div className="pagination">
      {previous ? (
        <Link to={`/?offset=${extractOffset(previous)}`} tabIndex={-1}>
          <button type='button'>Previous</button>
        </Link>
      ) : <button type='button' disabled>Previous</button>}
      {next ? (
        <Link to={`/?offset=${extractOffset(next)}`} tabIndex={-1}>
          <button type='button'>Next</button>
        </Link>
      ) : <button type='button' disabled>Next</button>}
    </div>
  );
}

export default Pagination;
