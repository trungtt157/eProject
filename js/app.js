let app = angular.module("myApp", ["ngRoute"])
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "home.html" })
        .when("/faq", { templateUrl: "faq.html" })
        .when("/clinic", { templateUrl: "dental_clinic.html" })
})

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});
