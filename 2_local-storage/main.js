var siteName = 'My Site',
    siteData = {
      siteUrl: 'mysite.com',
      siteDescription: 'Another JS site'
    };

localStorage.setItem( 'sitename' , siteName );

getSiteName = localStorage.getItem( 'sitename' );
console.log(getSiteName);


localStorage.setItem('siteData', JSON.stringify(siteData));

console.log(JSON.parse(localStorage.getItem( 'siteData' )));