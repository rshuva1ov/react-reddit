import Icon from "../../../Icons/Icon";
import { Break } from "../../Break";
import { EColor, Text } from "../../Text";
import styles from './userblock.css';

interface IUserBlockProps {
    avatarSrc?: string;
    username?: string;
}

const UserBlock = ({ avatarSrc, username }: IUserBlockProps) => {
    return (
        <a href="https://www.reddit.com/api/v1/authorize?client_id=JFMArRGh5-RbbPJqPYmCiw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
            className={styles.userBox}
        >
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
                    : <Icon name="anon" size={50} size2={50} />
                }
            </div>

            <div className={styles.username}>
                <Break size={12} />
                <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
            </div>
        </a>
    );
};

export default UserBlock;