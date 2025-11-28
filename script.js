let generatedOTP = null;

// Generate OTP securely
function generateOTP() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  generatedOTP = (array[0] % 900000 + 100000).toString();
  document.getElementById("otp").textContent = generatedOTP;
  document.getElementById("status").textContent = "";
}

function verifyOTP() {
  const input = document.getElementById("otpInput").value;
  const status = document.getElementById("status");

  if (!generatedOTP) {
    status.textContent = "Please generate an OTP first!";
    status.style.color = "red";
    return;
  }

  if (input === generatedOTP) {
    status.textContent = "✅ OTP Verified Successfully!";
    status.style.color = "green";
  } else {
    status.textContent = "❌ Invalid OTP. Try Again.";
    status.style.color = "red";
  }
}

document.getElementById("generateBtn").addEventListener("click", generateOTP);
document.getElementById("verifyBtn").addEventListener("click", verifyOTP);
