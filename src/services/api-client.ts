import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4c2c3a41ea0f409197949a6ea87c3f27'
    }
})