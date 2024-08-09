import { Link } from 'react-router-dom';

const ErrorForward = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2>It looks like you are lost...</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
};

export default ErrorForward;
