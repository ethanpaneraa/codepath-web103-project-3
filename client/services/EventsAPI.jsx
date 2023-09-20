import axios from 'axios';

class EventsAPI {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl; 
        this.token = null; 
    };

    async getAllEvents() {
        try {
            const response = await axios.get(`${this.remoteHostUrl}/resources`);
            return response.data;
        }
        catch (error) {
            return error.message;
        };
    };

    async getEventsById(id) {
        if (!id) {
            throw new Error('Missing id argument');
        };
        try {
            const response = await axios.get(`${this.remoteHostUrl}/resources/${id}`);
            return response.data;
        }
        catch (error) {
            return error.message;
        };
    };
};

export default new EventsAPI("http://:localhost:3000")