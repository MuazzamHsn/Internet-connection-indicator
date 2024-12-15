const wrapper = document.querySelector(".wrapper");
      const toast = wrapper.querySelector(".toast");
      const title = toast.querySelector("span");
      const subtitle = toast.querySelector("p");
      const wifiIcon = toast.querySelector(".icon");
      const closeIcon = toast.querySelector(".close-icon");

      window.onload = () => {
        // Function to check internet connection
        function ajax() {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

          xhr.onload = () => {
            if (xhr.status === 200 && xhr.status < 300) {
              online();
            } else {
              offline();
            }
          };

          xhr.onerror = () => {
            offline();
          };

          xhr.send();
        }

        // Online state handler
        function online() {
          toast.classList.remove("offline");
          title.innerText = "You're online now";
          subtitle.innerText = "Hurray! Internet is connected";
          wifiIcon.innerHTML = '<i class="fa-solid fa-wifi"></i>';
          wifiIcon.style.background = "#2ecc71";

          // Automatically close after 5 seconds
          setTimeout(() => {
            close();
          }, 5000);
        }

        // Offline state handler
        function offline() {
          toast.classList.add("offline");
          title.innerText = "You're offline";
          subtitle.innerText = "Oops! Internet is disconnected";
          wifiIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
          wifiIcon.style.background = "orangered";
        }

        // Close the toast notification
        function close() {
          wrapper.classList.add("hide");
        }

        // Periodically check connection status
        setInterval(() => {
          ajax();
        }, 3000);

        // Close button event listener
        closeIcon.addEventListener("click", () => {
          close();
        });
      };