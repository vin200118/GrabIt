angular.module('starter.postService', [])
.service('PostService', function($q) {
    return {
        createPost: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name != '' && pw != '') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})
