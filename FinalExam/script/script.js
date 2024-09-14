function mail_open() {

    document.getElementById("myOverlay").style.display = "block";
    document.querySelector('.sidenav').style.display = 'block';
    
    }

function mail_close() {

    document.getElementById("myOverlay").style.display = "none";
    document.querySelector('.sidenav').style.display = 'none';

  }

  // sidemenu

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  document.getElementById('myButton').onclick = function() {
    if (this.style.color === 'white') {
        this.style.color = 'black';
        this.style.backgroundColor = 'white';
    } else {
        this.style.color = 'white';
        this.style.backgroundColor = 'red';
    }
};

  // data structure 
  const contentArray = [
    {
      id: 'borge',
      content: `
    <br>
    <img class="mr animatetop" src="images/avatar3.png" style="width:20%;">
    <h5 class="opacity">Subject: Interview</h5>
    <h4><i class="fa fa-clock-o"></i> From JMA Wireless, Aug 15, 2024.</h4>
    <a class="btn bg-primary text-white" href="#">Reply<i class="ml fa fa-mail-reply"></i></a>
    <a class="btn bg-primary text-white" href="#">Forward<i class="ml fa fa-arrow-right"></i></a>
    <hr>
    <p>Hello Borge,<br>Thank you for your interest in the JMA Project Manager position. We were clearly impressed with your background and competence. We had a number of excellent candidates, including yourself, and it was a difficult decision. In the end, we decided to move forward with another candidate. We will keep you in mind for future openings as they develop.</p>
    <p>Best Regards, <br> The JMA Recruiting Team.</p>
  `
    },
    {
      id: 'jane',
      content: `
    <br>
    <img class="mr animatetop" src="images/avatar5.png" style="width:20%;">
    <h5 class="opacity">Subject: None</h5>
    <h4><i class="fa fa-clock-o"></i> From Jane Doe, Sep 25, 2015.</h4>
    <a class="btn bg-danger text-white">Reply<i class="ml fa fa-mail-reply"></i></a>
    <a class="btn bg-danger text-white">Forward<i class="ml fa fa-arrow-right"></i></a>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Forever yours,<br>Jane</p>
  `
    },

    {
      id: 'john',
      content: `
  <br>
  <img class="mr animatetop" src="images/avatar2.png" style="width:20%;">
  <h5 class="opacity">Subject: None</h5>
  <h4><i class="fa fa-clock-o"></i> From John Doe, Sep 23, 2015.</h4>
  <a class="btn bg-success text-white">Reply<i class="ml fa fa-mail-reply"></i></a>
  <a class="btn bg-success text-white">Forward<i class="ml fa fa-arrow-right"></i></a>
  <hr>
  <p>Welcome.</p>
  <p> That's it!</p>
`
    }
  ];

  // Function to load content into the container
  function loadContent(id) {
    let item = null;
    for (let i = 0; i < contentArray.length; i++) {
      if (contentArray[i].id === id) {
        item = contentArray[i];
      }
    }
    if (item){
      document.getElementById('content').innerHTML = item.content;
    }
  }