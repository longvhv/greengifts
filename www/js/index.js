/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	registrationId: '',
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		try{
			var push = PushNotification.init({
				android: {
					senderID: "278576349838"
				},
				browser: {
					pushServiceURL: 'http://push.api.phonegap.com/v1/push'
				},
				ios: {
					senderID: "278576349838",
					alert: "true",
					badge: "true",
					sound: "true"
				},
				windows: {}
			});
			
			push.on('registration', function(data) {
				if(data.registrationId)
				{
					app.registrationId = data.registrationId;
					push.subscribe('topics/greengift/global', function() {
					}, function(e) {
					});
				}
				// data.registrationId
				app.receivedEvent('deviceready');
			});
			push.on('error', function(e) {
				var ref = window.open('http://demo.greengift.vn/?page=Mobile.home', '_blank', 'location=no,zoom=no');
			});
		}
		catch(e)
		{
			var ref = window.open('http://demo.greengift.vn/?page=Mobile.home', '_blank', 'location=no,zoom=no');
		}
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
		
		var ref = window.open('http://demo.greengift.vn/?page=Mobile.home&amp;androidRegistrationId='+app.registrationId, '_blank', 'location=no,zoom=no');
         /*ref.addEventListener('loadstart', function(event) { console.log('start: ' + event.url); });
         ref.addEventListener('loadstop', function(event) { console.log('stop: ' + event.url); });
         ref.addEventListener('loaderror', function(event) { console.log('error: ' + event.message); });
         ref.addEventListener('exit', function(event) { console.log(event.type); });*/
    }
};
