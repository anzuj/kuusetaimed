

// $('.nav-link a[href="#' + url.split('#')[1] + '"]').tab('active');



// function showURL() {
//     console.log('example link');
//     let url = 'something#profile';
//     if (url.match('#')) {
//         $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
//     } 
// }

// showURL();


$(document).ready(() => {
    let url = window.location.href;
    if (url.indexOf("#") > 0){
   let activeTab = url.substring(url.indexOf("#") + 1);
      $('.nav[role="tablist"] a[href="#'+activeTab+'"]').tab('show');
    }
  
    $('a[role="tab"]').on("click", function() {
     let newUrl;
      const hash = $(this).attr("href");
        newUrl = url.split("#")[0] + hash;
      history.replaceState(null, null, newUrl);
    });
  });
