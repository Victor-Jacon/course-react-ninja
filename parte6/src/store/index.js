import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ? composeWithDevTools(applyMiddleware(sagaMiddleware)) /* REDUX SAGA 23 - Aplicamos todas as funções padrões para configuração do redux saga na nossa store; Aqui estamos realizando uma verificação ternária dupla, na primeira linha verificamos se tem o redux dev tools no navegador, se a linha de cima der certo, ai sim vai executar essa , que é o composeWithDevTools, se não der certo, ai ele vai pular o composeWithDevTools, e vai executar o applyMiddleware diretão mesmo */
  : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga); /* REDUX SAGA 24 - Executamos aqui o nosso rootSaga(é config padrão) */

export default store;