import styles from './orders.module.css';
import { SharedButton } from '@react-monorepo/shared-ui';

export function Orders() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Orders!</h1>
      <SharedButton />
    </div>
  );
}

export default Orders;
