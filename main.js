const profileUploaderBtn = document.querySelector(".profile_uploader-btn");
const profiteInputButton = document.querySelector(".profile_input-button");
const profileImage = document.querySelector(".profile_image");
const vectorIcon = document.querySelector(".vector-icon");
const uploadHere = document.querySelector(".upload-here");

profileUploaderBtn.addEventListener("click", ()=>{
    profiteInputButton.click();
});

profiteInputButton.addEventListener("change", function (){
    const file = this.files[0];
    // console.log(file);
    if (file) {
        const reader = new FileReader();
        reader.onload=()=>{
            const result = reader.result;
            profileImage.src = result;
            vectorIcon.style.display="none";
            uploadHere.style.display="none";
        };
        reader.readAsDataURL(file);
    }
});

