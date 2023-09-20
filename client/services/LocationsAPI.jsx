import axios from 'axios';

class LocationsAPI {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl;
        this.token = null;
    };

    async getAllLocations() {
        try {
            const response = await axios.get(`${this.remoteHostUrl}/locations`);
            return response.data;
        } catch (error) {
            return error.message
        };
    };
};

export default new LocationsAPI("http://localhost:3000")
