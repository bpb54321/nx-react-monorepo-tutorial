import styles from './orders.module.css';
import { SharedButton } from '@react-monorepo/shared-ui';

export function Orders() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Orders!</h1>
      <SharedButton />
      <h2>Order List</h2>
      <ol>
        <li>Toilet paper</li>
        <li>Dish soap</li>
        <li>Butter</li>
        <li>Paper towels</li>
      </ol>
    </div>
  );
}

export default Orders;
