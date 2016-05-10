angular.module('common')
.factory('User',['$rootScope',function($rootScope) {

    var user = {
        entitlements: undefined
    };

    var userName = {};

    return {
        set : function(newUser) {
            user.cuid = newUser.cuid;
        },
        get : function() {
            return user.cuid || '[cuid]';
        },
        setEntitlements : function(newEntitlements){
            user.entitlements=newEntitlements;
        },
        getEntitlements : function(){
            return user.entitlements;
        },

        userName: userName

    };

}]);