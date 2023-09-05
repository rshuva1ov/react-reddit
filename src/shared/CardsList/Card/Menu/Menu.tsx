import classNames from 'classnames';
import { useState } from 'react';

import Icon from '../../../../Icons/Icon';
import { merge } from '../../../../utils/js/merger';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { GenericList } from '../../../GenericList/CenericList';
import { EColor, Text } from '../../../Text/Text';
import st from './menu.css';
import s from './menuitemslist.css';
import { Dropdown } from '../../../Dropdown';


const styles = { ...st, ...s }

const LIST = [
  {
    As: 'li' as const, text: 'Комментарии', className: styles.menuItem, href: '#', image: <Icon
      name='comments'
      size={15}
    />
  },
  { As: 'div' as const, className: styles.divider },
  {
    As: 'li' as const, text: 'Поделиться', className: styles.menuItem, href: '#', image: <Icon
      name='share'
      size={12}
      size2={14}
    />
  },
  { As: 'div' as const, className: styles.divider },
  {
    As: 'li' as const, text: 'Скрыть', className: styles.menuItem, href: '#', image: <Icon
      name='hide'
      size={15}
    />
  },
  { As: 'div' as const, className: styles.divider },
  {
    As: 'li' as const, text: 'Сохранить', className: styles.menuItem, href: '#', image: <Icon
      name='save'
      size={14}
    />
  },
  { As: 'div' as const, className: styles.divider },
  {
    As: 'li' as const, text: 'Пожаловаться', className: styles.menuItem, href: '#', image: <Icon
      name='complain'
      size={16}
      size2={14}
    />
  },
].map(generateId);

function Menu() {
  const [list, setList] = useState(LIST);

  return (
    <div className={styles.menu}>
      <div className={styles.menu}>
        <Dropdown
          button={
            <button className={styles.menuButton}>
              <Icon
                name='menu'
                size={5}
                size2={20}
              />
            </button>
          }>
          <ul className={classNames(styles.menuItemsList, styles.dropdown)}>
            <GenericList list={list.map(merge({
              onClick: () => {
                console.log('click');
              }
            }))} />
            <button className={styles.closeButton}>
              <Text mobilesize={12} size={14} color={EColor.grey66}>Закрыть</Text>
            </button>
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}

export default Menu;