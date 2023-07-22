import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'

export default function Value({label, value}) {

  return (
    <div className={styles.valueWrapper}>
      <p className={styles.rowLabel}>{label}</p>
      <h2 className={styles.rowValue}>{value}</h2>
    </div>
  );
}