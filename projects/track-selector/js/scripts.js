$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();

    var name = $("#name").val();
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());

    var track = question1 + question2 + question3;
    var trackDescription;
    var trackPhoto

    if (track <= 10) {
      track = "CSS/Design";
      trackDescription = "Congragulations looks like your a perfect fit for CSS/Design, in it you will conceptualize, plan, and build a collection of files that determine the layout, colors, text styles, structure, graphics, images, and use interactive features that deliver pages to your site visitors. Web Design is a crucial component in web development, and students who learn design will be able to engineer positive and interactive user experiences through innovative interfaces.";
      var trackPhoto = "img/CSS.png";

    } else if (track >= 10 && track <= 21) {
      track = "PHP & Drupal"
      trackDescription = "Congragulations looks like your a perfect fit for PHP & Drupal, innthese two languages you can use it to make content-heavy websites with relatively little user interaction. The most popular content management systems are Wordpress, Drupal, and Joomla they are all written in PHP, and everything from local company websites up through large complex government deployments, are built with these tools. If you're wanting to work for an agency that builds websites for clients, or if you like the idea of building out sites for brands, businesses, and organizations, PHP is a great direction to go.";
      var trackPhoto = "img/php.png";

    } else if (track >= 22) {
      track = "Ruby"
      trackDescription = "Congragulations looks like your a perfect fit for Ruby, it is a favorite language of many developers building interactive web apps. If an app involves users making accounts, or entering information and interacting with dynamic content, there's a good chance it is built with Ruby. Ruby became popular because of the Rails framework, which is written with Ruby it simplified many of the common tasks associated with building web apps. It's most popular with startups and smaller companies who are looking to build their product quickly.";
      var trackPhoto = "img/ruby.png"

    } else {
      track = "nothing"
      trackDescription = "You dont need to do anything, it dosent look like your meant be a developer, instead heres a picture of a cat ";
      var trackPhoto = "img/cat.jpg"

    }
    
    $(".user-name").text(name);
    $(".which-track").text(track);
    $(".track-description").text(trackDescription);
    $(".track-photo").html('<img class ="img-responsive" src =' + trackPhoto + '>' );
  });
});
