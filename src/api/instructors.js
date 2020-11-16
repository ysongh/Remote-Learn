import { headers } from '../config';

const url1 = 'https://api.quickbase.com/v1/records/query';

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