import '../App.css';

export default function Navbar() {
  return (

    <nav className="nav">
      <h2>Math Magicians</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/calculator">Calculator</a></li>
        <li><a href="/quote">Quote</a></li>
      </ul>
    </nav>

  );
}
