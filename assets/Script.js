 
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");
 
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src =
      "https://drive.google.com/uc?export=view&id=1_1QksyMi1preMVYLovC397sJNetdz2U-";
    result.textContent = "Wait...";

    
    optionImages.forEach((image2, index2) => {
     
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

   
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

       
      let imageSrc = e.target.querySelector("img").src;
   
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = [
        "https://drive.google.com/uc?export=view&id=1_1QksyMi1preMVYLovC397sJNetdz2U-",
        "https://drive.google.com/uc?export=view&id=1_2yHvrMyxYnUFO7OO7EY-Z-pATVnpQQ1",
        "https://drive.google.com/uc?export=view&id=1ZsD2SBtbDh-TiP1oW2915YbNxxm_o26G"
      ];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User"
      };

       
      let outComeValue = outcomes[userValue + cpuValue];

        
      result.textContent =
        userValue === cpuValue ? "Match Draw" : '${outComeValue} Won!!';
    }, 2500);
  });
});