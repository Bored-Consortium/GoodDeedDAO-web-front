import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user} = useTelegram();

    return (
        <div className={'header'}>
            <span className={'username'}>
                Вы авторизованы как: {user?.username}
                \nНа данный момент в игре "ZovDobra" ассета нет
                \nComing soon, как говорится
            </span>
        </div>
    );
};

export default Header;
