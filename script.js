var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        //               Menu     //

        const sidemenu = document.getElementById('sidemenu');

    function openmenu(){
        sidemenu.style.right = '0';
    }

    function closemenu(){
        sidemenu.style.right = '-200px';
    }



    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      fetch('<https://script.google.com/macros/s/AKfycbw3NVBe-WE9xE4jB6gCab8IlbVZI9h_I09URXKloi12zo_YoVS3gEGzFTAenkc9u2ZMFg/exec>', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          alert('Form submitted successfully!');
      })
      .catch(error => {
          alert('Error submitting form!');
      });
  });


    