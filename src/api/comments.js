import { headers } from '../config';

const url1 = 'https://api.quickbase.com/v1/records/query';

export const getCommentsByTopicAPI = async (id) => {
    try{
        const res = await fetch(url1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({"from":"bqy2pidxm","where":`{6.CT.${id}}`,"select":[1,3,6,7]})
        });
        const data = await res.json();
        
        return data;
    } catch(err) {
        console.error(err);
        return [];
    }
}