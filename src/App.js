import './App.css';
import React, {useEffect} from "react";
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

    const onTestBtnHandler = () => {
        // some handler
        // onAdd(product);
    }

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'form'} element={<Form />}/>
        </Routes>
        {/*<Button className={'add-btn'} onClick={onTestBtnHandler}>*/}
        {/*    Отправить запрос*/}
        {/*</Button>*/}
    </div>
  );
}

export default App;
