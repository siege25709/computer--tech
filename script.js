/* ==================== DOM ELEMENTS ==================== */
const loginModal = document.getElementById("loginModal");
const modalOverlay = document.getElementById("modalOverlay");
const openLoginBtn = document.getElementById("openLoginModal");
const closeLoginBtn = document.getElementById("closeLoginModal");
const emailLoginForm = document.getElementById("emailLoginForm");
const emailMessage = document.getElementById("emailMessage");
const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");
const togglePasswordBtn = document.getElementById("togglePassword");
const googleLoginBtn = document.getElementById("googleLogin");
const appleLoginBtn = document.getElementById("appleLogin");
const signupLink = document.getElementById("signupLink");

/* ==================== MODAL FUNCTIONS ==================== */
function openModal() {
  loginModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  loginModal.classList.remove("active");
  document.body.style.overflow = "auto";
  emailMessage.textContent = "";
  emailMessage.className = "";
  emailLoginForm.reset();
  passwordInput.type = "password";
  togglePasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
}

/* ==================== MODAL EVENT LISTENERS ==================== */
openLoginBtn.addEventListener("click", openModal);
closeLoginBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && loginModal.classList.contains("active")) {
    closeModal();
  }
});

/* ==================== TOGGLE PASSWORD VISIBILITY ========== */
togglePasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
  }
  
  // Add animation
  togglePasswordBtn.style.animation = "none";
  setTimeout(() => {
    togglePasswordBtn.style.animation = "spin 0.5s ease";
  }, 10);
});

/* ==================== REAL-TIME INPUT VALIDATION ========== */
emailInput.addEventListener("input", (e) => {
  const value = e.target.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value === "";
  
  if (value && !isValid) {
    e.target.style.borderColor = "#FF6B6B";
  } else {
    e.target.style.borderColor = "rgba(108, 92, 231, 0.3)";
  }
});

passwordInput.addEventListener("input", (e) => {
  const value = e.target.value;
  const isValid = value.length === 0 || value.length >= 6;
  
  if (value && !isValid) {
    e.target.style.borderColor = "#FF6B6B";
  } else {
    e.target.style.borderColor = "rgba(108, 92, 231, 0.3)";
  }
});

/* ==================== MESSAGE DISPLAY FUNCTION ========== */
function showMessage(text, type) {
  emailMessage.textContent = text;
  emailMessage.className = `message-box ${type}`;
  
  if (type === "success") {
    setTimeout(() => {
      closeModal();
    }, 2000);
  }
}

/* ==================== EMAIL LOGIN FORM SUBMISSION ========== */
emailLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validation checks
  if (!email || !password) {
    showMessage("يرجى تعبئة جميع الحقول.", "error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage("الرجاء إدخال بريد إلكتروني صحيح.", "error");
    return;
  }

  if (password.length < 6) {
    showMessage("كلمة المرور يجب أن تكون 6 أحرف على الأقل.", "error");
    return;
  }

  // Simulate API call with loading animation
  const submitButton = emailLoginForm.querySelector("button");
  const originalContent = submitButton.innerHTML;
  submitButton.innerHTML = '<span>جاري المعالجة...</span><i class="fas fa-spinner fa-spin"></i><div class="btn-shimmer"></div>';
  submitButton.disabled = true;

  setTimeout(() => {
    // Store user data
    localStorage.setItem("techhubUser", JSON.stringify({ 
      email, 
      loginTime: new Date().toISOString(),
      loginMethod: "email"
    }));
    
    showMessage(`مرحبًا ${email}، تم تسجيل الدخول بنجاح! 🎉`, "success");
    
    // Reset button after modal closes
    setTimeout(() => {
      submitButton.innerHTML = originalContent;
      submitButton.disabled = false;
    }, 2000);
  }, 1500);
});

/* ==================== GOOGLE LOGIN ========== */
googleLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Add loading animation
  const googleButton = googleLoginBtn;
  const originalContent = googleButton.innerHTML;
  googleButton.innerHTML = '<div class="btn-inner"><i class="fas fa-spinner fa-spin"></i><span>جاري الاتصال...</span></div><div class="btn-shine"></div>';
  googleButton.disabled = true;

  setTimeout(() => {
    // Simulate Google login
    localStorage.setItem("techhubUser", JSON.stringify({
      email: "user@gmail.com",
      loginTime: new Date().toISOString(),
      loginMethod: "google"
    }));

    showMessage("تم تسجيل الدخول عبر Google بنجاح! 🎉", "success");

    setTimeout(() => {
      googleButton.innerHTML = originalContent;
      googleButton.disabled = false;
    }, 2000);
  }, 2000);
});

/* ==================== APPLE LOGIN ========== */
appleLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Add loading animation
  const appleButton = appleLoginBtn;
  const originalContent = appleButton.innerHTML;
  appleButton.innerHTML = '<div class="btn-inner"><i class="fas fa-spinner fa-spin"></i><span>جاري الاتصال...</span></div><div class="btn-shine"></div>';
  appleButton.disabled = true;

  setTimeout(() => {
    // Simulate Apple login
    localStorage.setItem("techhubUser", JSON.stringify({
      email: "user@icloud.com",
      loginTime: new Date().toISOString(),
      loginMethod: "apple"
    }));

    showMessage("تم تسجيل الدخول عبر Apple بنجاح! 🎉", "success");

    setTimeout(() => {
      appleButton.innerHTML = originalContent;
      appleButton.disabled = false;
    }, 2000);
  }, 2000);
});

/* ==================== SIGNUP LINK ========== */
signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  showMessage("سيتم توجيهك لصفحة التسجيل قريباً! ✨", "success");
  setTimeout(() => {
    // Here you would redirect to signup page
    console.log("Redirecting to signup page...");
  }, 1500);
});

/* ==================== PAGE LOAD EVENT ========== */
window.addEventListener("DOMContentLoaded", () => {
  // Check for remembered user
  const user = JSON.parse(localStorage.getItem("techhubUser"));
  if (user?.email) {
    const loginMethod = user.loginMethod || "البريد الإلكتروني";
    console.log(`مرحبًا بعودتك ${user.email} 👋 (تم التسجيل عبر: ${loginMethod})`);
  }

  // Add smooth scroll behavior
  addSmoothScroll();

  // Animate elements on scroll
  observeElements();

  // Add parallax on scroll
  addParallaxEffect();

  // Update active nav link on scroll
  updateActiveNavLink();
});

/* ==================== SMOOTH SCROLL FUNCTION ========== */
function addSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/* ==================== INTERSECTION OBSERVER ========== */
function observeElements() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".card, .feature-item, .section").forEach((el) => {
    observer.observe(el);
  });
}

/* ==================== PARALLAX EFFECT ========== */
function addParallaxEffect() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".floating-card");
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

/* ==================== ACTIVE NAV LINK ON SCROLL ========== */
function updateActiveNavLink() {
  window.addEventListener("scroll", () => {
    const navLinks = document.querySelectorAll(".nav a, .nav-login-btn");
    let current = "";

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      if (link.href) {
        link.style.color = "";
        if (link.getAttribute("href").slice(1) === current) {
          link.style.color = "var(--secondary)";
        }
      }
    });
  });
}

/* ==================== ADD SPIN ANIMATION ========== */
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotateZ(0deg); }
    100% { transform: rotateZ(360deg); }
  }
`;
document.head.appendChild(styleSheet);

/* ==================== MESSAGE DISPLAY FUNCTION ==================== */
function showMessage(text, type) {
  message.textContent = text;
  message.className = `message-box ${type}`;
  
  if (type === "success") {
    setTimeout(() => {
      message.textContent = "";
      message.className = "";
    }, 4000);
  }
}

/* ==================== INPUT VALIDATION ==================== */
emailInput.addEventListener("input", (e) => {
  const value = e.target.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || value === "";
  
  if (value && !isValid) {
    e.target.style.borderColor = "#FF6B6B";
  } else {
    e.target.style.borderColor = "rgba(108, 92, 231, 0.3)";
  }
});

passwordInput.addEventListener("input", (e) => {
  const value = e.target.value;
  const isValid = value.length === 0 || value.length >= 6;
  
  if (value && !isValid) {
    e.target.style.borderColor = "#FF6B6B";
  } else {
    e.target.style.borderColor = "rgba(108, 92, 231, 0.3)";
  }
});

/* ==================== FORM SUBMISSION ==================== */
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validation checks
  if (!email || !password) {
    showMessage("يرجى تعبئة جميع الحقول.", "error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage("الرجاء إدخال بريد إلكتروني صحيح.", "error");
    return;
  }

  if (password.length < 6) {
    showMessage("كلمة المرور يجب أن تكون 6 أحرف على الأقل.", "error");
    return;
  }

  // Simulate API call
  const submitButton = loginForm.querySelector("button");
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = '<span>جاري المعالجة...</span><i class="fas fa-spinner fa-spin"></i>';
  submitButton.disabled = true;

  setTimeout(() => {
    // Store user data
    localStorage.setItem("techhubUser", JSON.stringify({ email, loginTime: new Date().toISOString() }));
    
    showMessage(`مرحبًا ${email}، تم تسجيل الدخول بنجاح! 🎉`, "success");
    
    // Reset form
    loginForm.reset();
    
    // Reset button
    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
    
    // Clear input styles
    emailInput.style.borderColor = "rgba(108, 92, 231, 0.3)";
    passwordInput.style.borderColor = "rgba(108, 92, 231, 0.3)";
  }, 1500);
});

/* ==================== PAGE LOAD EVENT ==================== */
window.addEventListener("DOMContentLoaded", () => {
  // Check for remembered user
  const user = JSON.parse(localStorage.getItem("techhubUser"));
  if (user?.email) {
    showMessage(`مرحبًا بعودتك ${user.email} 👋`, "success");
  }

  // Add smooth scroll behavior
  addSmoothScroll();

  // Animate elements on scroll
  observeElements();
});

/* ==================== SMOOTH SCROLL FUNCTION ==================== */
function addSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/* ==================== INTERSECTION OBSERVER ==================== */
function observeElements() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".card, .feature-item, .section").forEach((el) => {
    observer.observe(el);
  });
}

/* ==================== PARALLAX EFFECT ==================== */
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".floating-card");
  
  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

/* ==================== ACTIVE NAV LINK ON SCROLL ==================== */
window.addEventListener("scroll", () => {
  const navLinks = document.querySelectorAll(".nav a");
  let current = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href").slice(1) === current) {
      link.style.color = "var(--secondary)";
    }
  });
});
