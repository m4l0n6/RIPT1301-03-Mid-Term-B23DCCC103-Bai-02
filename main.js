let alarmSound = new Audio('y2mate.com - báo thức dậy đi ông cháu ơi.mp3'); // đặt biến có giá trị là tiếng nhạc chuông

function start_function() {
    let minutes = document.getElementById("minutes").value; // lưu biến phút được nhập từ input
    let seconds = document.getElementById("seconds").value; // lưu biến giây được nhập từ input
    if ((minutes == '' || seconds == '') || (minutes <= 0 && seconds <= 0) ) { // điều kiện không hợp lê
        alert("Vui lòng nhập vào giá trị số cho phút và giây");
     } else {
        let totalTime = Number(minutes) * 60 + Number(seconds);  // chuyển giá trị đầu vào thành giây
        let currentTime = totalTime; 
        let timer = setInterval(function() {
            currentTime--; // trừ số giây
            let minutesLeft = Math.floor(currentTime / 60);   // tính phút còn lại
            let secondsLeft = currentTime % 60;  // tính giây còn lại
            // Hiển thị cả số 0
            if (minutesLeft < 10) {
                minutesLeft = "0" + minutesLeft;
            }
            if (secondsLeft < 10) {
                secondsLeft = "0" + secondsLeft;
            }
            document.getElementById("minutesleft").innerHTML = minutesLeft; // in ra số phút còn lại
            document.getElementById("secondsleft").innerHTML = secondsLeft; // in số giây còn lại
            if (currentTime <= 0) { 
                clearInterval(timer);
                alarmSound.play();
                setTimeout(function() {
                    alert('Dậy đi ông cháu ơi')
                }, 100)
                
            }
        }, 1000);
    }
}

function reset_function() {
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    document.getElementById("minutesleft").innerHTML = '00';
    document.getElementById("secondsleft").innerHTML = '00';
    alarmSound.pause();
    alarmSound.currentTime = 0;
}