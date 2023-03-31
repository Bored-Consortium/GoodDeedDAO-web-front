import './App.css';
import React, {useCallback, useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";
function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    // const onAuthBtnHandler = () => {
    //     // some handler
    //     // onAdd(product);
    // }

    const id = tg.id;
    const username = tg.username;
    const first_name = tg.first_name;
    const last_name = tg.last_name;
    //const hash = ;
    const bot_key = 'TU11tDw';

    const onAuthBtnHandler = useCallback(() => {
        const data = {
            id,
            username,
            first_name,
            last_name,
            //hash,
            bot_key,
        }
        tg.sendData(JSON.stringify(data));
    }, [])

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'form'} element={<Form />}/>
        </Routes>
        <Button className={'auth-btn'} onClick={onAuthBtnHandler}>
            Авторизоваться
        </Button>
    </div>
  );
}

export default App;
