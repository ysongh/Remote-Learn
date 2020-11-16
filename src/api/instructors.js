import { headers } from '../config';

const url1 = 'https://api.quickbase.com/v1/records/query';
const url2 = 'https://api.quickbase.com/v1/records';

export const getInstructorByTopicAPI = async (id) => {
    try{
        const res = await fetch(url1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "from":"bqzhuvk2g",
                "sortBy": [
                    {
                      "fieldId": 1,
                      "order": "DESC"
                    },
                ],
                "where":`{6.CT.${id}}`,
                "select":[1,3,6,7,10,12,14]
            })
        });
        const data = await res.json();
        
        return data;
    } catch(err) {
        console.error(err);
        return [];
    }
}

export const addInstructorAPI = async (id, newInstructor) => {
    try{
        const res = await fetch(url2, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "to":"bqzhuvk2g",
                "data": [
                    {
                        "6": {
                          "value": id
                        },
                        "7": {
                          "value": newInstructor.name
                        },
                        "8": {
                          "value": newInstructor.email
                        },
                        "10": {
                          "value": newInstructor.date
                        },
                        "12": {
                          "value": newInstructor.time
                        },
                        "14": {
                          "value": newInstructor.link
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