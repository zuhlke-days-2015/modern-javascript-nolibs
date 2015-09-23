export default class GoogleApi {
    static search(from, to) {
        var directionsService = new google.maps.DirectionsService();

        var request = {
            origin: from,
            destination: to,
            travelMode: google.maps.TravelMode.TRANSIT
        };

        return new Promise((resolve, reject) => {
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    resolve(response);
                } else {
                    reject(status);
                }
            });
        });
    }
}