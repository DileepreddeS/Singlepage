import axios from "axios";


export const getAllTickers=(search)=>{
    return axios
            .get(`https://api.stockjabber.com:8443/dev_temp/sj/getProductWithMarket/getAllTickers/${search}`)
            .then(response=>{
                    if(response.status===200){
                        return response.data
                    }
                }
            ).catch(e=>{console.log(e.message);})
}



export const getProductWithMarket=(product)=>{
    return axios
            .get(`https://api.stockjabber.com:8443/dev_temp/sj/getProductWithMarket/${product}`)
            .then(response=>{
                    if(response.status===200){
                        return response.data
                    }
                }
                ).catch(e=>{console.log(e.message);})
}

