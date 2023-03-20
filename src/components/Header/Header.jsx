import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user} = useTelegram();

    return (
        <div className={'header'}>
            <span className={'username'}>
                Вы авторизованы как: {user?.username}
                <br>На данный момент в игре "ZovDobra" ассета нет</br>
                <br>Coming soon, как говорится</br>
            </span>
        </div>
    );
};

export default Header;
