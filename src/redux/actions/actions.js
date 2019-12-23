import axios from 'axios';
import store from '../store/index';
import * as types from './types';

const getDefinition = (term) => {
    axios({
        "method":"GET",
        "url":"https://mashape-community-urban-dictionary.p.rapidapi.com/define",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key":"4f176a7ac9msh236ef374f62850bp1dd0f2jsn38135b0dee61"
        },"params":{
        "term":`${term}`
        }
        })
        .then((response)=>{
          const definitions = response.data.list[0];
            store.dispatch({type:types.GET_DEFINITIONS, definitions});
        })
        .catch((error)=>{
          console.log(error)
        })
      
}
const getTranslation = (target, input) =>{
  axios({
    "method":"GET",
    "url":"https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
    "x-rapidapi-key":"4f176a7ac9msh236ef374f62850bp1dd0f2jsn38135b0dee61"
    },
    "params":{
    "source": 'auto',
    "target": target,
    "input": input
    }
    })
    .then((response)=>{
      const translation = response.data.outputs[0].output.split(',')[0].split(':')[1];
            store.dispatch({type:types.CHANGE_LANGUAGE, translation});
    })
    .catch((error)=>{
      console.log(error)
    })

}

export { getDefinition,getTranslation };
