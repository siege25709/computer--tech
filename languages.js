/* ==================== LANGUAGE DATA ==================== */
const languagesData = {
  python: {
    name: "Python",
    icon: "fab fa-python",
    description: "لغة برمجة عالية المستوى وسهلة التعلم، معروفة بوضوح الكود وسهولة القراءة. تستخدم بشكل واسع في تطوير الويب والذكاء الاصطناعي وتحليل البيانات.",
    features: [
      { icon: "fas fa-check-circle", text: "سهلة التعلم والاستخدام" },
      { icon: "fas fa-check-circle", text: "مكتبات قوية ومتعددة" },
      { icon: "fas fa-check-circle", text: "دعم قوي للذكاء الاصطناعي" },
      { icon: "fas fa-check-circle", text: "أداء عالي في معالجة البيانات" }
    ],
    usages: "تطوير الويب، تحليل البيانات، الذكاء الاصطناعي، التعلم الآلي، الأتمتة والسكريبتات.",
    difficulty: 2
  },
  javascript: {
    name: "JavaScript",
    icon: "fab fa-js",
    description: "لغة برمجة قوية تعمل في المتصفحات والخوادم. تستخدم بشكل أساسي في تطوير واجهات المستخدم التفاعلية وتطوير التطبيقات.",
    features: [
      { icon: "fas fa-check-circle", text: "تعمل في جميع المتصفحات" },
      { icon: "fas fa-check-circle", text: "تفاعل فوري مع المستخدم" },
      { icon: "fas fa-check-circle", text: "إمكانيات متقدمة للـ DOM" },
      { icon: "fas fa-check-circle", text: "دعم البرمجة غير المتزامنة" }
    ],
    usages: "تطوير واجهات الويب، تطبيقات الويب الحديثة، تطوير سطح المكتب، تطبيقات الهاتف.",
    difficulty: 3
  },
  java: {
    name: "Java",
    icon: "fab fa-java",
    description: "لغة برمجة موجهة للكائنات عالية الأداء. معروفة بالاستقرار والأمان، وتستخدم في التطبيقات الكبيرة والموارد الثقيلة.",
    features: [
      { icon: "fas fa-check-circle", text: "برمجة موجهة للكائنات قوية" },
      { icon: "fas fa-check-circle", text: "أداء عالي جداً" },
      { icon: "fas fa-check-circle", text: "توافقية عالية (اكتب مرة، شغل في كل مكان)" },
      { icon: "fas fa-check-circle", text: "أمان قوي" }
    ],
    usages: "تطبيقات الويب الضخمة، تطبيقات سطح المكتب، تطبيقات الهاتف (Android)، تطبيقات المؤسسات.",
    difficulty: 3
  },
  cpp: {
    name: "C++",
    icon: "fas fa-plus",
    description: "لغة برمجة منخفضة المستوى توفر أداء عالي جداً وتحكم كامل بالذاكرة. مناسبة للتطبيقات التي تتطلب أداء عالي.",
    features: [
      { icon: "fas fa-check-circle", text: "أداء استثنائي جداً" },
      { icon: "fas fa-check-circle", text: "تحكم كامل بالموارد" },
      { icon: "fas fa-check-circle", text: "برمجة موجهة للكائنات" },
      { icon: "fas fa-check-circle", text: "معايير الصناعة" }
    ],
    usages: "تطبيقات الألعاب، تطبيقات النظام، محررات الصور، قواعد بيانات عالية الأداء.",
    difficulty: 4
  },
  php: {
    name: "PHP",
    icon: "fab fa-php",
    description: "لغة برمجية جهة الخادم مخصصة لتطوير الويب. سهلة التعلم وتعمل بشكل جيد مع قواعد البيانات.",
    features: [
      { icon: "fas fa-check-circle", text: "سهلة التعلم والاستخدام" },
      { icon: "fas fa-check-circle", text: "جيدة مع قواعد البيانات" },
      { icon: "fas fa-check-circle", text: "دعم واسع من الخوادم" },
      { icon: "fas fa-check-circle", text: "إطارات عمل قوية" }
    ],
    usages: "تطوير الويب الديناميكي، إدارة المحتوى، متاجر التجارة الإلكترونية، تطبيقات الويب البسيطة.",
    difficulty: 2
  },
  typescript: {
    name: "TypeScript",
    icon: "fab fa-js-square",
    description: "نسخة معززة من JavaScript توفر نظام أنواع ثابت. تساعد في كتابة كود أكثر أماناً وسهولة في الصيانة.",
    features: [
      { icon: "fas fa-check-circle", text: "نظام أنواع ثابت قوي" },
      { icon: "fas fa-check-circle", text: "كود أكثر أماناً" },
      { icon: "fas fa-check-circle", text: "أدوات تطوير متقدمة" },
      { icon: "fas fa-check-circle", text: "توافق كامل مع JavaScript" }
    ],
    usages: "تطبيقات الويب الكبيرة، مشاريع الشركات، تطبيقات React و Angular.",
    difficulty: 3
  },
  go: {
    name: "Go",
    icon: "fas fa-cube",
    description: "لغة برمجة حديثة طورتها جوجل، مصممة للأداء العالي والبساطة. مشهورة في تطوير تطبيقات الخوادم والأنظمة.",
    features: [
      { icon: "fas fa-check-circle", text: "أداء عالي جداً" },
      { icon: "fas fa-check-circle", text: "سهلة التعلم" },
      { icon: "fas fa-check-circle", text: "دعم المعالجة المتزامنة القوي" },
      { icon: "fas fa-check-circle", text: "بناء بسيط للتطبيقات" }
    ],
    usages: "تطبيقات الخوادم، أدوات النظام، تطبيقات Microservices، معالجة البيانات الضخمة.",
    difficulty: 3
  },
  rust: {
    name: "Rust",
    icon: "fas fa-gear",
    description: "لغة برمجة حديثة توفر أمان عالي وأداء استثنائي. معروفة بالحماية من الأخطاء الشائعة في البرمجة.",
    features: [
      { icon: "fas fa-check-circle", text: "أمان من الأخطاء الشائعة" },
      { icon: "fas fa-check-circle", text: "أداء عالي جداً" },
      { icon: "fas fa-check-circle", text: "دعم البرمجة المتزامنة" },
      { icon: "fas fa-check-circle", text: "نظام الملكية العبقري" }
    ],
    usages: "تطبيقات النظام، أدوات الأداء العالية، تطبيقات الويب الآمنة، برمجيات حرجة.",
    difficulty: 4
  }
};

/* ==================== MODAL FUNCTIONS ==================== */
function openLanguageModal(languageKey) {
  const data = languagesData[languageKey];
  if (!data) return;

  // Update modal header
  document.getElementById("modalTitle").textContent = data.name;
  document.getElementById("modalIcon").className = data.icon + " language-modal-icon";

  // Update description
  document.getElementById("modalDescription").textContent = data.description;

  // Update features
  const featuresContainer = document.getElementById("modalFeatures");
  featuresContainer.innerHTML = data.features
    .map(f => `
      <div class="feature-item">
        <i class="${f.icon}"></i>
        <span>${f.text}</span>
      </div>
    `)
    .join("");

  // Update usages
  document.getElementById("modalUsages").textContent = data.usages;

  // Update difficulty
  const difficultyContainer = document.getElementById("modalDifficulty");
  difficultyContainer.innerHTML = Array(5)
    .fill(0)
    .map((_, i) => `
      <div style="
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: ${i < data.difficulty ? 'var(--secondary)' : 'rgba(108, 92, 231, 0.2)'};
        transition: all 0.3s ease;
      "></div>
    `)
    .join("");

  // Show modal with animation
  const modal = document.getElementById("languageModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Trigger animation
  setTimeout(() => {
    modal.style.animation = "fadeIn 0.3s ease";
  }, 10);
}

function closeLanguageModal() {
  const modal = document.getElementById("languageModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

/* ==================== CLOSE MODAL WITH ESCAPE KEY ==================== */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLanguageModal();
  }
});

/* ==================== PAGE LOAD ==================== */
window.addEventListener("DOMContentLoaded", () => {
  // Add smooth animations when page loads
  const cards = document.querySelectorAll(".language-card");
  cards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      card.style.zIndex = 10;
    });
    card.addEventListener("mouseleave", () => {
      card.style.zIndex = 1;
    });
  });

  // Add scroll animation
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

  cards.forEach((card) => {
    observer.observe(card);
  });
});

/* ==================== ADD ANIMATIONS ==================== */
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
document.head.appendChild(styleSheet);
