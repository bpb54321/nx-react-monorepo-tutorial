import styles from './products.module.css';
import { SharedButton } from '@react-monorepo/shared-ui';

export function Products() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      <p>This is a change. <span role="img" aria-label="Emoji: waving hand">👋</span></p>
      <SharedButton />
    </div>
  );
}

export default Products;
