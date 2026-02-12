var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

// remap jQuery to $
(function ($) {
  /* trigger when page is ready */
  $(document).ready(function () {
    // Family Law Articles toggle is handled by inline script on each page

		var currentLocationPhoneNum = document.getElementById('Current_Location_Phone_Num_Val').value;
		var $location_phone_numbers = document.getElementsByClassName('location_phone_number');

		if( !!currentLocationPhoneNum )
		{
			if( /iPhone/i.test(navigator.userAgent) ) {
				$location_phone_numbers[0].innerHTML =
					'<a id="tel_btn" href="sms://' +
					currentLocationPhoneNum.replace(/-/g, "") +
					';?&body=I%20need%20an%20excellent%20attorney%21">' +
					currentLocationPhoneNum +
					"</a>";
			} else {
				$location_phone_numbers[0].innerHTML =
					'<a id="tel_btn" href="tel:+1-' +
					currentLocationPhoneNum +
					'">' +
					currentLocationPhoneNum +
					"</a>";
			}
		}
  });
})(window.jQuery || window.$);

//  This javascript function will toggle the link to display the location dropdown, and the location dropdown.
function ToggleLocationsDropdown() {
  var show_locations_link = document.getElementById("Show_Locations_Link");
  var locations_dropdown = document.getElementById(
    "Locations_Dropdown_Wrapper"
  );

  if (show_locations_link.style.display != "none") {
    show_locations_link.style.display = "none";
    locations_dropdown.style.display = "block";
  } else {
    show_locations_link.style.display = "block";
    locations_dropdown.style.display = "none";
  }
}

//  This javascript function will change the location text in the header, and if any other places where the office location is listed on the current page.
//  Note: Depending on which AFLC website the code below will need to be adjusted.
function SwitchLocation(location_value) {
  var location_parts = location_value.split("|");
  if (
    typeof location_parts[0] != "undefined" &&
    typeof location_parts[1] != "undefined"
  ) {
    var $location_phone_numbers = document.getElementsByClassName(
      "location_phone_number"
    );

    var i;
    for (i = 0; i < $location_phone_numbers.length; i++) {
			if( /iPhone/i.test(navigator.userAgent) ) {
				$location_phone_numbers[i].innerHTML =
          '<a id="tel_btn" href="sms://' +
          location_parts[1].replace(/-/g, "") +
          ';?&body=I%20need%20an%20excellent%20attorney%21">' +
					location_parts[1] +
					"</a>";
			} else {
				$location_phone_numbers[i].innerHTML =
					'<a id="tel_btn" href="tel:' +
					location_parts[1] +
					'">' +
					location_parts[1] +
					"</a>";
			}
    }

    var $location_phone_locations = document.getElementsByClassName(
      "location_phone_location"
    );
    var i2;
    for (i2 = 0; i2 < $location_phone_locations.length; i2++) {
      $location_phone_locations[i2].innerHTML = location_parts[0];
    }
  }
}

}

/*
     FILE ARCHIVED ON 02:58:22 Apr 24, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:48:15 Feb 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.494
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.012
  esindex: 0.008
  cdx.remote: 12.43
  LoadShardBlock: 125.546 (3)
  PetaboxLoader3.datanode: 263.251 (5)
  PetaboxLoader3.resolve: 104.643 (4)
  load_resource: 254.38 (2)
*/