import { headers } from '../config';

const url1 = 'https://api.quickbase.com/v1/records/query';
const url2 = 'https://api.quickbase.com/v1/records';

export const signInAPI = async (email, password) => {
    try{
        const res = await fetch(url1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "from":"bq63pu96d",
                "sortBy": [
                    {
                      "fieldId": 1,
                      "order": "DESC"
                    },
                ],
                "where":`{6.CT.${email}}`,
                "select":[3,6,7]
            })
        });
        const { data } = await res.json();

        if(!data.length) return null;
        if(data[0][7].value === password) return data[0][6].value;
        
        return null;
    } catch(err) {
        console.error(err);
        return null;
    }
}

export const registerAPI = async (email, password) => {
    try{
        const res = await fetch(url2, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "to":"bq63pu96d",
                "data": [
                    {
                        "6": {
                          "value": email
                        },
                        "7": {
                          "value": password
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

export const getUserIdByEmailAPI = async (email) => {
    try{
        const res = await fetch(url1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "from":"bq63pu96d",
                "where":`{6.CT.${email}}`,
                "select":[3]
            })
        });
        const { data } = await res.json();
        if(!data.length) return null;
        
        return data[0][3].value;
    } catch(err) {
        console.error(err);
        return null;
    }
}

export const getChannelAddressAPI = async (id) => {
    try{
        const res = await fetch(url1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "from":"bq68yx9vp",
                "where":`{6.CT.${id}}`,
                "select":[7]
            })
        });
        const { data }  = await res.json();

        console.log(data[0][7].value);
        
        return null;
    } catch(err) {
        console.error(err);
        return null;
    }
}