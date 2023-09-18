import React from 'react';
import { DropdownContent } from './DropdownContent';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  dropdownContentRootId: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => { };

export function Dropdown({
  button,
  children,
  isOpen,
  dropdownContentRootId,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen]
  );
  const handleOpen = (e: React.MouseEvent) => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const ref = React.useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsDropdownOpen(false);
  }

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        handleClose?.();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={ref}>{button}</div>
      {isDropdownOpen && (
        <DropdownContent
          children={children}
          setIsDropdownOpen={setIsDropdownOpen}
          dropdownContentRootId={dropdownContentRootId}
        />
      )}
    </div>
  );
}
