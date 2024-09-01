document.addEventListener("DOMContentLoaded", function() {
  const typingText = document.getElementById('typing-text');
  const messages = [
    "Welcome to my website!",
    "My Name Is Mohamed Reda",
    "I am a web developer.",
  ];
  let currentMessageIndex = 0;
  let charIndex = 0;

  function typeMessage() {
    // كتابة الرسالة حرفًا حرفًا
    if (charIndex < messages[currentMessageIndex].length) {
      typingText.innerHTML += messages[currentMessageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeMessage, 100); // سرعة الكتابة: 100ms بين كل حرف
    } else {
      // انتظر 3 ثوانٍ بعد الانتهاء من كتابة الرسالة الحالية
      setTimeout(() => {
        typingText.innerHTML += '<br>'; // إضافة سطر جديد بعد الرسالة
        charIndex = 0;
        currentMessageIndex++;

        // التحقق مما إذا كانت هناك رسائل أخرى للكتابة
        if (currentMessageIndex < messages.length) {
          typeMessage(); // ابدأ كتابة الرسالة التالية بعد الانتظار
        } else {
          // إعادة بدء الكتابة من البداية بعد كتابة جميع الرسائل
          setTimeout(() => {
            typingText.innerHTML = ''; // مسح النصوص السابقة
            currentMessageIndex = 0;
            typeMessage(); // ابدأ الكتابة من أول رسالة
          }, 3000); // الانتظار 3 ثوانٍ قبل إعادة البدء
        }
      }, 3000); // الانتظار 3 ثوانٍ بعد انتهاء الرسالة
    }
  }

  // بدء الكتابة عند تحميل الصفحة
  typeMessage();

  // Smooth scroll to sections
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50, // تعديل هذه القيمة لتناسب وضعية العنوان
        behavior: 'smooth'
      });
    });
  });
});
