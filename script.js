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

   

//               Form     //
// Contact Form Submission //

    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      fetch('<https://script.google.com/macros/s/AKfycbz96e-ZkSdM2n6PCvk7lna1vvbimlrjseVCS51yOwnFktqmifBax41xeRRtkcr8UM2ySA/exec>', {
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


    