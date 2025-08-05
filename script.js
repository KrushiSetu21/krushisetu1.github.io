const translations = {
  en: {
    title: "Krushi Setu",
    tagline: "Your bridge to government schemes for Indian farmers",
    welcome: "Welcome, Farmers!",
    intro: "Find, apply, and track your government schemes in one place.",
    schemes_title: "📑 All Schemes",
    schemes_desc: "Explore central and state government schemes.",
    alerts_title: "📅 Deadline Alerts",
    alerts_desc: "Get reminders before deadlines.",
    prices_title: "🛒 Mandi Prices (Coming Soon)",
    prices_desc: "Live market price updates.",
    language_title: "🗣️ Multilingual Support",
    language_desc: "Available in English, Marathi, Hindi.",
    submit: "Submit"
  },
  hi: {
    title: "कृषि सेतु",
    tagline: "भारतीय किसानों के लिए सरकारी योजनाओं का एक मंच",
    welcome: "किसानों का स्वागत है!",
    intro: "सरकारी योजनाओं को खोजें, आवेदन करें और ट्रैक करें।",
    schemes_title: "📑 सभी योजनाएं",
    schemes_desc: "केंद्रीय और राज्य सरकार की योजनाएं खोजें।",
    alerts_title: "📅 समय सीमा अलर्ट",
    alerts_desc: "आवेदन की अंतिम तिथि से पहले अलर्ट पाएं।",
    prices_title: "🛒 मंडी भाव (जल्द आ रहा है)",
    prices_desc: "भारत भर के मंडी भाव की जानकारी।",
    language_title: "🗣️ बहुभाषीय समर्थन",
    language_desc: "अंग्रेजी, मराठी, हिंदी में उपलब्ध।",
    submit: "जमा करें"
  },
  mr: {
    title: "कृषी सेतू",
    tagline: "भारतीय शेतकऱ्यांसाठी सरकारी योजना एकाच ठिकाणी",
    welcome: "शेतकऱ्यांचे स्वागत आहे!",
    intro: "शासकीय योजना शोधा, अर्ज करा आणि ट्रॅक करा.",
    schemes_title: "📑 सर्व योजना",
    schemes_desc: "केंद्र आणि राज्य शासनाच्या योजना शोधा.",
    alerts_title: "📅 अंतिम दिनांक सूचना",
    alerts_desc: "अर्जाची अंतिम मुदत लक्षात ठेवण्यासाठी सूचना मिळवा.",
    prices_title: "🛒 बाजारभाव (लवकरच)",
    prices_desc: "भारतभरातील लाइव्ह बाजारभाव माहिती.",
    language_title: "🗣️ बहुभाषिक समर्थन",
    language_desc: "मराठी, हिंदी, इंग्रजीत उपलब्ध.",
    submit: "सबमिट करा"
  }
};

document.getElementById("languageSwitcher").addEventListener("change", function () {
  const lang = this.value;
  const text = translations[lang];
  for (let key in text) {
    const el = document.getElementById(key);
    if (el) el.innerText = text[key];
  }
});
