
import { Products } from '@react-monorepo/products';
import { Route, Routes } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
