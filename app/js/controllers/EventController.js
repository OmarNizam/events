'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData) {

    $scope.event = eventData.getEvent();



    $scope.upVoteSession = function(session) {
       session.upVoteCount++;
    }

    $scope.downVoteSession = function(session) {
       sessionb.upVoteCount--;
    }

    $scope.sortorder = 'name';

  }
);

