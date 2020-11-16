import { headers } from '../config';

const url1 = 'https://api.quickbase.com/v1/records/query';
const url2 = 'https://api.quickbase.com/v1/records';

export const getTopicsAPI = async (page, type) => {
    try{
        let body = {
            "from": "bqyx3rp8i",
            "sortBy": [
                {
                  "fieldId": 1,
                  "order": "DESC"
                },
            ],
            "select":[1,3,6,7,8,14],
            "options": {
                "skip": page * 3,
                "top": 3,
            }
        }

        if(type){
            body = {
                "from": "bqyx3rp8i",
                "sortBy": [
                    {
                      "fieldId": 1,
                      "order": "DESC"
                    },
                ],
                "where":`{14.CT.'${type}'}`,
                "select":[1,3,6,7,8,14],
                "options": {
                    "skip": page * 3,
                    "top": 3,
                }
            }
        }
        const res = await fetch(url1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
        const data = await res.json();

        return data;
    } catch(err) {
        console.error(err);
        return [];
    }
}

export const addTopicAPI = async (newTopic) => {
    try{
        const res = await fetch(url2, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "to":"bqyx3rp8i",
                "data": [
                    {
                        "6": {
                            "value": newTopic.title
                        },
                        "7": {
                            "value": newTopic.detail
                        },
                        "8": {
                            "value": "0"
                        },
                        "14": {
                            "value": newTopic.type
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

export const getTopicByIdAPI = async (id) => {
    try{
        const res = await fetch(url1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({"from":"bqyx3rp8i","where":`{3.CT.${id}}`,"select":[1,3,6,7,8,14]})
        });
        const data = await res.json();

        return data;
    } catch(err) {
        console.error(err);
        return [];
    }
}