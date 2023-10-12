import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/'

export const fetchImages = async (value) => {
    // const q = value;
    const key = '39138145-0133bb68dd7b803a442388e53';
    const resp = await axios.get(`/?q=${value}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
    return resp.data;
}