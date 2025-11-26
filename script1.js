// script1.js — Full Working Version with all features + 2-line summary

// ---------------------------
// Smooth Scroll for Navigation
// ---------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ---------------------------
// Text-to-Speech Setup
// ---------------------------
let speech = null;
let isPaused = false;

const summaryText = `The story Woman Painters of Mithila explains how the traditional Mithila paintings, created by women for centuries, became world famous. During a severe drought, an officer named William Archer noticed the beautiful wall paintings and encouraged women to paint on paper. This helped them earn money and gain recognition as artists. The story shows how creativity and tradition empowered the women of Mithila.`;

// Start Reading
document.getElementById("readSummary").addEventListener("click", () => {
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();

    speech = new SpeechSynthesisUtterance(summaryText);
    speech.rate = 1;
    speech.pitch = 1;
    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);
});

// Pause Reading
document.getElementById("pauseSummary").addEventListener("click", () => {
    if (window.speechSynthesis.speaking && !isPaused) {
        window.speechSynthesis.pause();
        isPaused = true;
    }
});

// Resume Reading
document.getElementById("resumeSummary").addEventListener("click", () => {
    if (isPaused) {
        window.speechSynthesis.resume();
        isPaused = false;
    }
});

// Stop Reading
document.getElementById("stopSummary").addEventListener("click", () => {
    window.speechSynthesis.cancel();
    isPaused = false;
});

// ---------------------------
// Interactive Practice Questions
// ---------------------------
// Short Answer
document.getElementById('check1').addEventListener('click', () => {
    const ans = document.getElementById('answer1').value.trim().toLowerCase();
    const fb = document.getElementById('feedback1');
    if (!ans) {
        fb.textContent = 'Please write an answer.';
        fb.style.color = 'crimson';
        return;
    }
    const keywords = ['paper','sell','earn','income','money','market'];
    const found = keywords.some(k => ans.includes(k));
    if (found) {
        fb.textContent = '✓ Correct! The women were encouraged to paint on paper to sell their art and earn money.';
        fb.style.color = 'green';
    } else {
        fb.textContent = '✗ Close. Hint: They painted on paper so they could sell their art and earn income.';
        fb.style.color = 'crimson';
    }
});

// Fill in the blank
document.getElementById('check2').addEventListener('click', () => {
    const ans = document.getElementById('answer2').value.trim().toLowerCase();
    const fb = document.getElementById('feedback2');
    if (!ans) {
        fb.textContent = 'Please type an answer.';
        fb.style.color = 'crimson';
        return;
    }
    const correct = ['madhubani','madhubani painting','mithila painting'];
    if (correct.includes(ans)) {
        fb.textContent = '✓ Correct! The art form is known as Madhubani.';
        fb.style.color = 'green';
    } else {
        fb.textContent = '✗ Not quite. Correct answer: Madhubani (or Mithila painting).';
        fb.style.color = 'crimson';
    }
});

// MCQ
document.getElementById('mcqCheck').addEventListener('click', () => {
    const radios = document.querySelectorAll('input[name="mcq"]');
    let selected = null;
    radios.forEach(r => { if(r.checked) selected = r.value; });
    const fb = document.getElementById('mcqFeedback');
    if (!selected) {
        fb.textContent = 'Please select an option.';
        fb.style.color = 'crimson';
        return;
    }
    if (selected === 'b') {
        fb.textContent = '✓ Correct! A drought and need for income caused the women to sell paintings.';
        fb.style.color = 'green';
    } else {
        fb.textContent = '✗ Incorrect. The correct answer is B: a drought and the need for income.';
        fb.style.color = 'crimson';
    }
});

// Flashcards
document.querySelectorAll('.card-flip').forEach(card => {
    const front = card.dataset.front || '';
    const back = card.dataset.back || '';
    card.textContent = front;
    card.addEventListener('click', () => {
        if (card.classList.contains('flipped')) {
            card.classList.remove('flipped');
            card.textContent = front;
        } else {
            card.classList.add('flipped');
            card.textContent = back;
        }
    });
});

// ---------------------------
// 2-line Quick Summary
// ---------------------------
document.getElementById('shortSummary').addEventListener('click', () => {
    document.getElementById('twoLine').textContent = 'Women painters of Mithila used traditional art to support their families. Transferring designs to paper gave them recognition and income.';
});