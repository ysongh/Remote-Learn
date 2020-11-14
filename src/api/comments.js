import { headers } from '../config';

const url1 = 'https://api.quickbase.com/v1/records/query';
const url2 = 'https://api.quickbase.com/v1/records';

export const getCommentsByTopicAPI = async (id) => {
    try{
        const res = await fetch(url1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "from":"bqy2pidxm",
                "sortBy": [
                    {
                      "fieldId": 1,
                      "order": "DESC"
                    },
                ],
                "where":`{6.CT.${id}}`,
                "select":[1,3,6,7,12]
            })
        });
        const data = await res.json();
        
        return data;
    } catch(err) {
        console.error(err);
        return [];
    }
}

export const addCommentAPI = async (id, detail) => {
    try{
        const res = await fetch(url2, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "to":"bqy2pidxm",
                "data": [
                    {
                        "6": {
                            "value": id
                        },
                        "7": {
                            "value": detail
                        },
                        "12": {
                            "value": "Guest"
                        }
                    }
                ]
            })
        });
        if (res.ok) {
            return true;
        }
    } catch(err) {
        console.error(err);
        return false;
    }
}

export const deleteCommentAPI = async (id) => {
    try{
        const res = await fetch(url2, {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify({
                "from": "bqy2pidxm",
                "where": `{3.EX.${id}}`
            })
        });
        if (res.ok) {
            return true;
        }
    } catch(err) {
        console.error(err);
        return false;
    }
}