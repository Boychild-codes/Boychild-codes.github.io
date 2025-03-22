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



    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
      
        const form = event.target;
        const formData = {
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        };
      
        const status = document.getElementById('form-status');
      
        // Replace with your Google Apps Script Web App URL
        const scriptURL = 'AKfycbxyRZ1bVHQMgbsOHoSNL0MhTjcnEPNRQ-_2cvKdyFxP';
      
        fetch(scriptURL, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.text())
          .then(data => {
            status.innerHTML = 'Message sent successfully!';
            form.reset();
          })
          .catch(error => {
            status.innerHTML = 'Oops! There was a problem sending your message.';
          });
      });


    