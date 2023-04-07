import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";
import {sha256} from 'js-sha256';

const bot_token = '6274532073:AAGBd8RzOJgQmmCTHXBkYHsugmYZXNK2XuA';
function App() {
    const {tg, user} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    const data_check_string =   'id=${user?.id}\\n' +
                                'first_name={user?.first_name}\\n' +
                                'last_name=${user?.last_name}\\n' +
                                'username=${user?.username}';
    const hash = sha256(data_check_string);

    const onAuthBtnHandler = () => {
        fetch('https://external.api.tonplay.io/x/auth/v2/login/tg', {
            method: 'POST',
            headers: {
                'X-Auth-Tonplay': 'Z8qtRovKdC:BP9kG6sPKwlfyqpZZ10t',
            },
            body: JSON.stringify({
                id: user?.id,
                username: user?.username,
                first_name: user?.first_name,
                last_name: user?.last_name,
                hash: hash,
                bot_key: 'TU11tDw',
            })
        }).then((response) => {
                console.log(response.data);
                if (response.ok) {
                    const element = document.querySelector('.username');
                    element.show();
                    const element1 = document.querySelector('.username1');
                    element1.hide();
                } else {
                    const element = document.querySelector('.username');
                    element.hide();
                    const element1 = document.querySelector('.username1');
                    element1.show();
                }
        })
    }

  return (
    <div className="App">
        <Header />
        <Button className={'test-btn'} onClick={onAuthBtnHandler()}>
            Авторизоваться
        </Button>
        <Button className={'test-btn'}>
            <a href="/game/HackatomssRepaired2-HTML5-Shipping.html">Играть</a>
        </Button>
        <div hidden className={'username'}>
                Вы авторизованы как: {user?.username}
        </div>
        <div hidden className={'username1'}>
                Вы не авторизованы
        </div>

        {/*<Routes>*/}
        {/*    <Route index element={<ProductList />}/>*/}
        {/*    <Route path={'form'} element={<Form />}/>*/}
        {/*</Routes>*/}
    </div>
  );
}

export default App;
