import styles from './card.scss';
import { Button, Input } from 'antd';

function Card({ operateType = 'edit' }) {
  return (
    <div>
      {operateType == 'edit' ?
        <div className={styles.card}>
          <Button className={styles.operate} size="small">保存</Button>
          <Input className={styles.title} value="" placeholder="标题" />
          <Input type="textarea" className={styles.content} rows={4} placeholder="说明" />
        </div>
        :
        <div className={styles.card}>
          <Button className={styles.operate} size="small">编辑</Button>
          <Input className={styles.title} disabled value="" placeholder="标题" />
          <Input type="textarea" disabled className={styles.content} rows={4} placeholder="说明" />
        </div>
      }
    </div>
  );
}

export default Card;
