import Image from 'next/image';
import logo from '../components/images/trueAmerican.jpg';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* <h1 style={{ color: 'white' }}>Hello {user.displayName}! </h1> */}
      <Image src={logo} alt="True American" />
    </div>
  );
}

export default Home;
