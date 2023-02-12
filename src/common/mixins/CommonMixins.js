export default {
    methods: {
        /**
         * Format the request into query string of a URL
         * 
         * @param {Object} queryParams 
         * @returns {String} string
         */
        setQueryParameter (queryParams) {
            const searchParams = new URLSearchParams(queryParams);
            return searchParams.toString();
        }
    }
}