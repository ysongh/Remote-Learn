import { headers } from '../config';

const url = 'https://api.quickbase.com/v1/records/query';

export const getTopics = async () => {
    try{
        const res = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({"from":"bqyx3rp8i","select":[1,3,6,7,8,14]})
        });
        const data = await res.json();

        return data;
    } catch(err) {
        console.error(err)
    }
}