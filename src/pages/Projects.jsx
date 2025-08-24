import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// === ALL 139 IMAGE IMPORTS ===
import emma from '../assets/emma.jpg';
import thea from '../assets/thea.jpg';
import ella from '../assets/ella.jpg';
import knights from '../assets/knights.jpg';
import mathematrix from '../assets/mathematrix.jpg';
import semac from '../assets/semc.jpg';
import ideapool from '../assets/ideapool.jpg';
import fitdeck from '../assets/firedeck.jpg';
import chatterbox from '../assets/chatterbox.jpg';
import capnshare from '../assets/capnshare.jpg';
import careerMapper from '../assets/career-mapper.jpg';
import inventory from '../assets/inventory.jpg';
import faceRecognition from '../assets/face-recognition.jpg';
import agilePlanner from '../assets/agile-planner.jpg';
import agrotech from '../assets/agrotech.jpg';
import influencer from '../assets/influencer.jpg';
import tecDevCl from '../assets/tec_dev_club.jpg';
import portfolioNew from '../assets/portfolio_new.jpg';
import portfolioClassic from '../assets/portfolio.jpg';
import invoiceFlow from '../assets/invoice_flow_nextjs_app.jpg';
import carRental from '../assets/car_rental_vue_laravel_app.jpg';
import saasLanding from '../assets/saas_landing_page_template.jpg';
import brajeshProfile from '../assets/brajesh31.jpg';
import mlWithAt from '../assets/machinelearning_with_at.jpg';
import ecoAware from '../assets/ecoaware.jpg';
import shoppyCart from '../assets/shoppycart.jpg';
import luckyPorter from '../assets/luckyporter.jpg';
import gupt from '../assets/gupt.jpg';
import groceryReminder from '../assets/grocery_reminder_2.jpg';
import mernStack from '../assets/mern_stack.jpg';
import djangoChat from '../assets/django_chat.jpg';
import stockManagement from '../assets/stock_management_application.jpg';
import nlpAnalysis from '../assets/analysis_of_products_using_nlp.jpg';
import ticTakToe from '../assets/tic_tak_toe.jpg';
import careerCompass from '../assets/careercompass.jpg';
import reunite from '../assets/reunite.jpg';
import ecoNirvana from '../assets/econirvana.jpg';
import covidDetection from '../assets/covid_detection.jpg';
import snapnote from '../assets/snapnote.jpg';
import hacktoberFestC from '../assets/hacktober_fest_2023.jpg';
import hacktoberFestJava from '../assets/hacktoberfest2023.jpg';
import imgDetectBot from '../assets/image_detecting_telegram_bot.jpg';
import rpaUiPath from '../assets/robotic_process_automation_uipath.jpg';
import newsTraker from '../assets/newstraker.jpg';
import atLearnHub from '../assets/at_learnhub.jpg';
import googleSearchAutomation from '../assets/google_search_automation.jpg';
import tracker from '../assets/tracker.jpg';
import insightFacePytorch from '../assets/insightface_pytorch.jpg';
import flexLayoutVite from '../assets/flexlayout_vite_example.jpg';
import influencerSponsorPlatform from '../assets/influencer_sponsor_coordination_platform.jpg';
import stockAlertNotifier from '../assets/stock_alert_notifier.jpg';
import amazonAutomation from '../assets/amazon_automation.jpg';
import toDoList from '../assets/to_do_list.jpg';
import simpleCalculator from '../assets/simplecalcultor.jpg';
import chotaBheem from '../assets/chota_bheem_adventure_game.jpg';
import agroTechAI from '../assets/agro_tech_ai.jpg';
import profileManagement from '../assets/profile_management.jpg';
import amazonSalesDashboard from '../assets/amazon_sales_analysis_dashboard.jpg';
import dataAnalysisDashboard from '../assets/data_analysis_dashboard.jpg';
import fileManagementApp from '../assets/file_management_app.jpg';
import kfcLanding from '../assets/kfc.jpg';
import wordCounter from '../assets/word_counter.jpg';
import numberGuessingGame from '../assets/number_guessing_game.jpg';
import currencyConverter from '../assets/currency_converter.jpg';
import adventureGame from '../assets/adventure_game.jpg';
import myBank from '../assets/my_bank.jpg';
import studentManagement from '../assets/student_management_system.jpg';
import todoApp from '../assets/todo_app.jpg';
import aatm from '../assets/aatm.jpg';
import spotifyClone from '../assets/spotify_clone.jpg';
import digitalClock from '../assets/digital_clock.jpg';
import quizAppProject from '../assets/quiz_app_project.jpg';
import themeColorSwitcher from '../assets/theme_color_switcher.jpg';
import randomQuoteGenerator from '../assets/random_quote_generator.jpg';
import emojiMoodTracker from '../assets/emoji_mood_tracker_app.jpg';
import guessNumberGame from '../assets/guess_number_game.jpg';
import jsConditionLoops from '../assets/condition_and_loops_in_js_assignment.jpg';
import jsOperatorsPart2 from '../assets/operators_in_javascript_part_2.jpg';
import introToJsAssignment from '../assets/introduction_to_javascript_assignment.jpg';
import webpageCloneProject from '../assets/webpage_clone_project.jpg';
import tailwindCssAssignment from '../assets/tailwind_css_assignment.jpg';
import bootstrapAssignment from '../assets/bootstrap_assignment.jpg';
import advancedCss from '../assets/advanced_css.jpg';
import cssSelectorAssignment from '../assets/more_on_css_selector_assignment.jpg';
import mediaQueryAssignment from '../assets/media_query_assignment.jpg';
import cssGridAssignment from '../assets/css_grid_assignment.jpg';
import flexboxInCss from '../assets/flexbox_in_css.jpg';
import positionsInCss from '../assets/positions_in_css_assignment.jpg';
import moreOnCssAssignment from '../assets/more_on_css_assignment.jpg';
import startingWithCssAssignment from '../assets/starting_with_css_assignment.jpg';
import seoAssignment from '../assets/seo_assignment.jpg';
import modernHtmlAssignment from '../assets/modern_html_assignment.jpg';
import mediaAndFormAssignment from '../assets/media_and_form_assignment.jpg';
import gettingStartedWithHtml from '../assets/getting_started_with_html_assignment1.jpg';
import coreHtmlAssignment from '../assets/core_html_assignment.jpg';
import cervicalCancerPrediction from '../assets/cervical_cancer_prediction.jpg';
import admissionPrediction from '../assets/admission_prediction.jpg';
import airPassengersForecast from '../assets/air_passengers_time_series_forecasting.jpg';
import fakeNewsPrediction from '../assets/fake_news_prediction.jpg';
import lockScreen from '../assets/lock_screen.jpg';
import regionGrowing from '../assets/region_growing.jpg';
import imgSegmentationGrayscale from '../assets/image_analysis_for_segmentation_of_grayscale_image.jpg';
import userManagement from '../assets/user_management.jpg';
import quizWeb from '../assets/quiz_web.jpg';
import reactMovieApp from '../assets/react_movieapp.jpg';
import countryLocation from '../assets/country_location.jpg';
import matlabFingerprint from '../assets/matlab_fingerprint.jpg';
import dipHomeExam from '../assets/digital_image_processing_home_exam.jpg';
import financialAnalysisRag from '../assets/financial_analysis_rag.jpg';
import bifoga from '../assets/bifoga.jpg';
import alienInvasionGame from '../assets/alien_invasion_game.jpg';
import amazonClone from '../assets/amazon_clone.jpg';
import whetherWeb from '../assets/whether_web.jpg';
import reactTypescriptPro from '../assets/react_typescript_pro.jpg';
import simpleCalculator2 from '../assets/simple_calculator.jpg';
import contactDisplay from '../assets/contact_display.jpg';
import kilimani from '../assets/kilimani.jpg';
import eCommers from '../assets/e_commers.jpg';
import pythonAI from '../assets/python_ai.jpg';
import radarscope from '../assets/radarscope.jpg';
import guessTheNumber from '../assets/guess_the_number.jpg';
import udemyClone from '../assets/udemy_clone.jpg';
import shoppingNostra from '../assets/shopping_nostra.jpg';
import skillShareGrow from '../assets/skill_share_grow_final.jpg';
import emotionDetector from '../assets/emotion_detector.jpg';
import skillSharingGrowing from '../assets/skill_sharing_growing.jpg';
import techDevClub from '../assets/tech_dev_club.jpg';
import aiTaskOptimizer from '../assets/ai_powered_task_optimizer.jpg';
import mazeCrafter from '../assets/mazecrafter1.jpg';
// === END OF IMAGE IMPORTS ===

const ProjectShowcase = () => {
  const cardsRef = useRef([]);

  const colors = ["blue", "amber", "emerald", "violet", "red", "cyan", "green"];

  const allProjects = [
    {
      "id": 1,
      "title": "Emma – Personal AI Assistant",
      "image": emma,
      "description": "A smart command-line Python-based personal assistant designed to automate everyday digital tasks and boost productivity.",
      "tech": ["Python", "AI", "CLI", "Automation"],
      "category": "AI/ML",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/emma"
    },
    {
      "id": 2,
      "title": "Thea – AI Therapist",
      "image": thea,
      "description": "An AI-powered virtual mental health assistant providing empathetic and therapeutic interactions using advanced NLP models.",
      "tech": ["Python", "TensorFlow", "NLP", "AI"],
      "category": "AI/ML",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/thea"
    },
    {
      "id": 3,
      "title": "Ella - AI Chat Companion",
      "image": ella,
      "description": "A mobile-friendly AI chatbot app built with React Native, providing context-aware conversations for daily engagement.",
      "tech": ["React Native", "AI", "Chatbot", "Mobile"],
      "category": "AI/ML",
      "demoLink": "https://expo.dev/@brajesh31/ella",
      "sourceLink": "https://github.com/Brajesh31/ella"
    },
    {
      "id": 4,
      "title": "Face Recognition System",
      "image": faceRecognition,
      "description": "An advanced dashboard for real-time face recognition and analytics, built with modern computer vision libraries.",
      "tech": ["Python", "OpenCV", "AI", "Face Recognition"],
      "category": "AI/ML",
      "demoLink": "https://face-recognition-dashboard.netlify.app/",
      "sourceLink": "https://github.com/Brajesh31/face-recognition-dashboard"
    },
    {
      "id": 5,
      "title": "AI Powered Task Optimizer",
      "image": aiTaskOptimizer,
      "description": "Leveraging data science to analyze employee emotions and moods to optimize task allocation and productivity.",
      "tech": ["Python", "Data Science", "AI", "ML"],
      "category": "AI/ML",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/AI-Powered-Task-Optimizer"
    },
    {
      "id": 6,
      "title": "COVID-19 Detection",
      "image": covidDetection,
      "description": "A machine learning model to detect COVID-19 from medical imaging data, showcasing deep learning application in healthcare.",
      "tech": ["Jupyter Notebook", "Python", "Deep Learning"],
      "category": "AI/ML",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/Covid-Detection"
    },
    {
      "id": 7,
      "title": "Fake News Prediction",
      "image": fakeNewsPrediction,
      "description": "An NLP-based machine learning model to classify news articles as real or fake, built using Python.",
      "tech": ["Python", "NLP", "Machine Learning"],
      "category": "AI/ML",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/Fake-News-Prediction"
    },
    {
      "id": 8,
      "title": "Admission Prediction",
      "image": admissionPrediction,
      "description": "A predictive model to forecast university admission chances based on applicant scores and qualifications.",
      "tech": ["Python", "Machine Learning", "Prediction"],
      "category": "AI/ML",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/Admission-Prediction"
    },
    {
      "id": 9,
      "title": "Cervical Cancer Prediction",
      "image": cervicalCancerPrediction,
      "description": "A machine learning project focused on predicting cervical cancer risk from medical data.",
      "tech": ["Python", "ML", "Healthcare"],
      "category": "AI/ML",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/Cervical-Cancer-Prediction"
    },
    {
      "id": 10,
      "title": "AgroTech - Smart Farming Platform",
      "image": agrotech,
      "description": "An IoT-based smart farming solution with crop monitoring, weather prediction, and an automated irrigation system.",
      "tech": ["React", "Node.js", "IoT", "Python"],
      "category": "Full-Stack",
      "demoLink": "https://agrotech-demo.netlify.app/",
      "sourceLink": "https://github.com/Brajesh31/agrotech"
    },
    {
      "id": 11,
      "title": "SEMAC - College ML Utility App",
      "image": semac,
      "description": "A machine learning utility app for semester management, resource sharing, and providing academic analytics to students.",
      "tech": ["Next.js", "ML", "MongoDB", "Education"],
      "category": "Full-Stack",
      "demoLink": "https://semac.vercel.app/",
      "sourceLink": "https://github.com/Brajesh31/semac"
    },
    {
      "id": 12,
      "title": "IdeaPool - Project Collaboration",
      "image": ideapool,
      "description": "A platform for developers to share project ideas, form teams, and collaborate on new ventures.",
      "tech": ["MERN", "Collaboration", "Full-Stack"],
      "category": "Full-Stack",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/IdeaPool"
    },
    {
      "id": 13,
      "title": "FitDeck - Fitness Platform",
      "image": fitdeck,
      "description": "A social platform for fitness enthusiasts to connect, share routines, and follow coaches.",
      "tech": ["MERN", "Social", "Fitness", "Mobile"],
      "category": "Full-Stack",
      "demoLink": "https://expo.dev/@brajesh31/fitdeck",
      "sourceLink": "https://github.com/Brajesh31/fitdeck"
    },
    {
      "id": 14,
      "title": "ChatterBox - Real-Time Chat App",
      "image": chatterbox,
      "description": "A real-time messaging application with group chats, file sharing, and modern chat features.",
      "tech": ["Node.js", "Socket.io", "React", "Chat"],
      "category": "Full-Stack",
      "demoLink": "https://chatterbox-live.netlify.app/",
      "sourceLink": "https://github.com/Brajesh31/chatterbox"
    },
    {
      "id": 15,
      "title": "Cap'nShare - Food Sharing App",
      "image": capnshare,
      "description": "A web application to facilitate food sharing across a campus to reduce wastage, built with Ruby on Rails.",
      "tech": ["Ruby on Rails", "PostgreSQL", "App"],
      "category": "Full-Stack",
      "demoLink": "https://capnshare.netlify.app/",
      "sourceLink": "https://github.com/Brajesh31/capnshare"
    },
    {
      "id": 16,
      "title": "Career Mapper",
      "image": careerMapper,
      "description": "An application to compare job offers based on multiple lifestyle indices, cost of living, and safety data.",
      "tech": ["Python", "React", "MySQL", "AI"],
      "category": "Full-Stack",
      "demoLink": "https://career-mapper.herokuapp.com/",
      "sourceLink": "https://github.com/Brajesh31/career-mapper"
    },
    {
      "id": 17,
      "title": "Inventory Management System",
      "image": inventory,
      "description": "An advanced inventory management system to streamline stock, orders, and deliveries for businesses.",
      "tech": ["Django", "Python", "React", "Management"],
      "category": "Full-Stack",
      "demoLink": "https://smart-inventory.netlify.app/",
      "sourceLink": "https://github.com/Brajesh31/inventory-management"
    },
    {
      "id": 18,
      "title": "Influencer Coordination Platform",
      "image": influencer,
      "description": "A platform connecting social media influencers and sponsors for seamless collaboration and campaign management.",
      "tech": ["Next.js", "Node.js", "PostgreSQL", "React"],
      "category": "Full-Stack",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/Influencer-Sponsor-Coordination-Platform"
    },
    {
      "id": 19,
      "title": "Car Rental App",
      "image": carRental,
      "description": "A full-stack car rental application built with Vue.js on the frontend and Laravel for the backend API.",
      "tech": ["Vue.js", "Laravel", "PHP", "Full-Stack"],
      "category": "Full-Stack",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/car-rental-vue-laravel-app"
    },
    {
      "id": 20,
      "title": "Django Chat",
      "image": djangoChat,
      "description": "A real-time chat application developed using the Django framework, demonstrating backend channel capabilities.",
      "tech": ["Django", "Python", "Chat", "JavaScript"],
      "category": "Full-Stack",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/django-chat"
    },
    {
      "id": 21,
      "title": "The Knights of Flovora",
      "image": knights,
      "description": "A 2D adventure RPG with quest-based progression, combat mechanics, and collectible items, built with Flutter.",
      "tech": ["Flutter", "Dart", "Game", "RPG"],
      "category": "Game Development",
      "demoLink": "https://play.google.com/store/apps/details?id=com.brajesh.knights",
      "sourceLink": "https://github.com/Brajesh31/knights"
    },
    {
      "id": 22,
      "title": "Mathematrix",
      "image": mathematrix,
      "description": "An interactive website to teach and test multiplication tables for kids through gamified learning.",
      "tech": ["HTML", "CSS", "JavaScript", "Learning"],
      "category": "Frontend",
      "demoLink": "https://mathematrix.netlify.app/",
      "sourceLink": "https://github.com/Brajesh31/mathematrix"
    },
    {
      "id": 23,
      "title": "Agile Project Planner",
      "image": agilePlanner,
      "description": "An Agile project management tool with sprint planning, task tracking, and team collaboration features.",
      "tech": ["React", "Node.js", "Agile", "Tool"],
      "category": "Tool",
      "demoLink": "https://agile-planner.netlify.app/",
      "sourceLink": "https://github.com/Brajesh31/agile-planner"
    },
    {
      "id": 24,
      "title": "InvoiceFlow App",
      "image": invoiceFlow,
      "description": "A Next.js application for creating, managing, and tracking invoices with a clean, modern interface.",
      "tech": ["Next.js", "TypeScript", "App", "Tool"],
      "category": "Frontend",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/invoice-flow-nextjs-app"
    },
    {
      "id": 25,
      "title": "SaaS Landing Page",
      "image": saasLanding,
      "description": "A modern and responsive landing page template for SaaS products, built with HTML and CSS.",
      "tech": ["HTML", "CSS", "Template", "UI/UX"],
      "category": "Frontend",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/saas-landing-page-template"
    },
    {
      "id": 26,
      "title": "My Bank",
      "image": myBank,
      "description": "A command-line interface application simulating basic banking operations, built with TypeScript.",
      "tech": ["TypeScript", "CLI", "Tool", "OOP"],
      "category": "Tool",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/My_Bank"
    },
    {
      "id": 27,
      "title": "Currency Converter",
      "image": currencyConverter,
      "description": "A simple and efficient currency conversion tool built with TypeScript and leveraging a public exchange rate API.",
      "tech": ["TypeScript", "API", "Tool", "CLI"],
      "category": "Tool",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/currency_converter"
    },
    {
      "id": 28,
      "title": "Word Counter",
      "image": wordCounter,
      "description": "A utility tool developed in TypeScript to count words, characters, and sentences from a given text input.",
      "tech": ["TypeScript", "Tool", "CLI", "Utility"],
      "category": "Tool",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/word_counter"
    },
    {
      "id": 29,
      "title": "Amazon Sales Dashboard",
      "image": amazonSalesDashboard,
      "description": "A data analysis project visualizing Amazon sales data to uncover trends and insights using dashboarding tools.",
      "tech": ["Data Analysis", "Dashboard", "Visualization"],
      "category": "Data",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/Amazon-Sales-Analysis-Dashboard"
    },
    {
      "id": 30,
      "title": "Student Management System",
      "image": studentManagement,
      "description": "A CLI-based system to manage student records, demonstrating object-oriented programming in TypeScript.",
      "tech": ["TypeScript", "OOP", "CLI", "System"],
      "category": "Tool",
      "demoLink": "",
      "sourceLink": "https://github.com/Brajesh31/student_management_system"
    },
    {
      "id": 31, "title": "TEC Dev Club", "image": tecDevCl, "description": "Community platform for Tech Dev Club, featuring events, projects, and resources.", "tech": ["React", "TypeScript", "Community"], "category": "Full-Stack", "demoLink": "https://techdevclub.com/", "sourceLink": "https://github.com/Brajesh31/TEC_DEV_CL"
    },
    {
      "id": 32, "title": "Portfolio New", "image": portfolioNew, "description": "A modern, updated version of my personal portfolio showcasing my latest work.", "tech": ["React", "TypeScript", "Portfolio"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Portfolio_New"
    },
    {
      "id": 33, "title": "Portfolio Classic", "image": portfolioClassic, "description": "An earlier version of my personal portfolio website.", "tech": ["HTML", "CSS", "JavaScript"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/portfolio"
    },
    {
      "id": 34, "title": "Brajesh's Profile", "image": brajeshProfile, "description": "A GitHub profile repository containing my professional summary and highlights.", "tech": ["Markdown", "GitHub"], "category": "Other", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Brajesh31"
    },
    {
      "id": 35, "title": "Machine Learning with AT", "image": mlWithAt, "description": "A repository for machine learning projects and experiments.", "tech": ["Python", "Jupyter", "ML"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/MachineLearning_with_AT"
    },
    {
      "id": 36, "title": "EcoAware", "image": ecoAware, "description": "An application aimed at raising awareness about environmental issues.", "tech": ["React", "Node.js"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/EcoAware"
    },
    {
      "id": 37, "title": "ShoppyCart", "image": shoppyCart, "description": "A simple e-commerce shopping cart application.", "tech": ["JavaScript", "HTML", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/ShoppyCart"
    },
    {
      "id": 38, "title": "Lucky Porter", "image": luckyPorter, "description": "A logistics and delivery service simulation project.", "tech": ["Python", "Flask"], "category": "Backend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/luckyporter"
    },
    {
      "id": 39, "title": "Gupt", "image": gupt, "description": "A project focused on cryptography and data security, written in C.", "tech": ["C", "Security", "Cryptography"], "category": "Tool", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/gupt"
    },
    {
      "id": 40, "title": "Grocery Reminder", "image": groceryReminder, "description": "A mobile application to manage grocery lists and set reminders, built with Kotlin.", "tech": ["Kotlin", "Android", "Mobile"], "category": "Mobile", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Grocery-Reminder-2"
    },
    {
      "id": 41, "title": "MERN Stack Boilerplate", "image": mernStack, "description": "A boilerplate for starting new projects with the MERN (MongoDB, Express, React, Node.js) stack.", "tech": ["MERN", "Boilerplate", "Full-Stack"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/mern-stack"
    },
    {
      "id": 42, "title": "Stock Management Application", "image": stockManagement, "description": "A web application for managing and tracking stock inventory.", "tech": ["JavaScript", "Node.js", "Express"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Stock-Management-application"
    },
    {
      "id": 43, "title": "Analysis of Products using NLP", "image": nlpAnalysis, "description": "An NLP project to analyze product reviews and extract sentiment and key features.", "tech": ["Python", "NLP", "HTML"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Analysis-of-products-using-NLP"
    },
    {
      "id": 44, "title": "Tic Tac Toe", "image": ticTakToe, "description": "A classic Tic Tac Toe game built with JavaScript.", "tech": ["JavaScript", "HTML", "CSS", "Game"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Tic-tak-toe"
    },
    {
      "id": 45, "title": "Career Compass", "image": careerCompass, "description": "A data-driven tool to help users explore and decide on career paths.", "tech": ["Jupyter", "Python", "Data Science"], "category": "Data", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/CareerCompass"
    },
    {
      "id": 46, "title": "Reunite", "image": reunite, "description": "A platform designed to help reconnect people, possibly for events or social causes.", "tech": ["JavaScript", "React"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/REUNITE"
    },
    {
      "id": 47, "title": "EcoNirvana", "image": ecoNirvana, "description": "A project focused on environmental sustainability and awareness.", "tech": ["TypeScript", "React"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/EcoNirvana"
    },
    {
      "id": 48, "title": "Snapnote", "image": snapnote, "description": "A quick and easy note-taking application.", "tech": ["JavaScript", "React"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Snapnote"
    },
    {
      "id": 49, "title": "HacktoberFest 2023 (C)", "image": hacktoberFestC, "description": "My contributions to Hacktoberfest 2023, focusing on C language projects.", "tech": ["C", "Open Source", "Hacktoberfest"], "category": "Other", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Hacktober-Fest-2023"
    },
    {
      "id": 50, "title": "HacktoberFest 2023 (Java)", "image": hacktoberFestJava, "description": "My contributions to Hacktoberfest 2023, focusing on Java language projects.", "tech": ["Java", "Open Source", "Hacktoberfest"], "category": "Other", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Hacktoberfest2023"
    },
    {
      "id": 51, "title": "Image Detecting Telegram Bot", "image": imgDetectBot, "description": "A Telegram bot that uses computer vision to detect objects in images.", "tech": ["Python", "Telegram Bot", "OpenCV"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Image_detecting_telegram_bot"
    },
    {
      "id": 52, "title": "Robotic Process Automation (RPA)", "image": rpaUiPath, "description": "A project demonstrating RPA using UiPath for automating business processes.", "tech": ["RPA", "UiPath", "Automation"], "category": "Tool", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Robotic-Process-Automation-UiPath"
    },
    {
      "id": 53, "title": "NewsTraker", "image": newsTraker, "description": "A news aggregator application that tracks and displays the latest news from various sources.", "tech": ["JavaScript", "React", "API"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/NewsTraker"
    },
    {
      "id": 54, "title": "AT LearnHub", "image": atLearnHub, "description": "An educational hub and learning platform.", "tech": ["Python", "Django"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/AT_LearnHub"
    },
    {
      "id": 55, "title": "Google Search Automation", "image": googleSearchAutomation, "description": "A script to automate Google searches and data scraping.", "tech": ["Python", "Selenium", "Automation"], "category": "Tool", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Google_search_automation"
    },
    {
      "id": 56, "title": "Tracker", "image": tracker, "description": "A general-purpose tracking application.", "tech": ["HTML", "CSS", "JavaScript"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/tracker"
    },
    {
      "id": 57, "title": "InsightFace Pytorch", "image": insightFacePytorch, "description": "An implementation or exploration of the InsightFace face recognition framework using PyTorch.", "tech": ["PyTorch", "Python", "Face Recognition"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/InsightFace_Pytorch"
    },
    {
      "id": 58, "title": "FlexLayout Vite Example", "image": flexLayoutVite, "description": "An example project demonstrating the use of flexbox layouts in a Vite-powered application.", "tech": ["Vite", "TypeScript", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/flexlayout-vite-example"
    },
    {
      "id": 59, "title": "Stock Alert Notifier", "image": stockAlertNotifier, "description": "A Python script that monitors stock prices and sends alerts based on predefined conditions.", "tech": ["Python", "API", "Automation"], "category": "Tool", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Stock_Alert_Notifier"
    },
    {
      "id": 60, "title": "Amazon Automation", "image": amazonAutomation, "description": "A set of scripts for automating tasks on Amazon, such as tracking prices or scraping data.", "tech": ["Python", "Selenium", "Web Scraping"], "category": "Tool", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Amazon-Automation"
    },
    {
      "id": 61, "title": "To-Do List", "image": toDoList, "description": "A classic to-do list application to manage tasks.", "tech": ["JavaScript", "HTML", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/To-Do-List"
    },
    {
      "id": 62, "title": "Simple Calculator", "image": simpleCalculator, "description": "A simple calculator web application.", "tech": ["JavaScript", "HTML", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/SimpleCalcultor"
    },
    {
      "id": 63, "title": "Chota Bheem Adventure Game", "image": chotaBheem, "description": "A simple adventure game based on the Chota Bheem character.", "tech": ["JavaScript", "HTML", "Game"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Chota-Bheem-Adventure-game"
    },
    {
      "id": 64, "title": "Agro Tech AI", "image": agroTechAI, "description": "An AI-powered solution for the agriculture technology sector.", "tech": ["JavaScript", "AI", "Node.js"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Agro_tech_AI"
    },
    {
      "id": 65, "title": "Profile Management", "image": profileManagement, "description": "A system for managing user profiles.", "tech": ["TypeScript", "React"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/profile-management"
    },
    {
      "id": 66, "title": "Data Analysis Dashboard", "image": dataAnalysisDashboard, "description": "A dashboard for visualizing and analyzing data from various sources.", "tech": ["Python", "Dash", "Data Visualization"], "category": "Data", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Data-Analysis-Dashboard"
    },
    {
      "id": 67, "title": "File Management App", "image": fileManagementApp, "description": "An application for managing files and directories.", "tech": ["Python", "Tkinter"], "category": "Tool", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/File-Management-App"
    },
    {
      "id": 68, "title": "KFC Landing Page", "image": kfcLanding, "description": "A clone of the KFC landing page.", "tech": ["HTML", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/kfc"
    },
    {
      "id": 69, "title": "Number Guessing Game", "image": numberGuessingGame, "description": "A classic number guessing game.", "tech": ["JavaScript", "HTML"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/number_guessing_game"
    },
    {
      "id": 70, "title": "Adventure Game", "image": adventureGame, "description": "A simple text-based or 2D adventure game.", "tech": ["JavaScript", "HTML"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Adventure-Game"
    },
    {
      "id": 71, "title": "Todo App", "image": todoApp, "description": "A task management application.", "tech": ["JavaScript", "React"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Todo_App"
    },
    {
      "id": 72, "title": "AATM", "image": aatm, "description": "An ATM simulation project.", "tech": ["TypeScript", "CLI"], "category": "Tool", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/AATM"
    },
    {
      "id": 73, "title": "Spotify Clone", "image": spotifyClone, "description": "A clone of the Spotify web player interface.", "tech": ["HTML", "CSS", "JavaScript"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/spotify-clone"
    },
    {
      "id": 74, "title": "Digital Clock", "image": digitalClock, "description": "A simple digital clock displayed on a web page.", "tech": ["HTML", "CSS", "JavaScript"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Digital-Clock"
    },
    {
      "id": 75, "title": "Quiz App Project", "image": quizAppProject, "description": "An application for creating and taking quizzes.", "tech": ["JavaScript", "HTML", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/QuizAppProject"
    },
    {
      "id": 76, "title": "Theme Color Switcher", "image": themeColorSwitcher, "description": "A utility to switch the color theme of a website.", "tech": ["JavaScript", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Theme-color-switcher"
    },
    {
      "id": 77, "title": "Random Quote Generator", "image": randomQuoteGenerator, "description": "An application that displays random quotes fetched from an API.", "tech": ["JavaScript", "API", "HTML"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Random-Quote-Generator"
    },
    {
      "id": 78, "title": "Emoji Mood Tracker", "image": emojiMoodTracker, "description": "An app to track your mood using emojis.", "tech": ["JavaScript", "HTML"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Emoji-Mood-Tracker-app"
    },
    {
      "id": 79, "title": "Guess Number Game", "image": guessNumberGame, "description": "A simple guess the number game.", "tech": ["CSS", "HTML", "JavaScript"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Guess-Number-Game"
    },
    {
      "id": 80, "title": "JS Conditions & Loops Assignment", "image": jsConditionLoops, "description": "An assignment focusing on JavaScript conditions and loops.", "tech": ["JavaScript", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Condition-and-Loops-in-JS-Assignment"
    },
    {
      "id": 81, "title": "JS Operators Assignment", "image": jsOperatorsPart2, "description": "An assignment focusing on JavaScript operators.", "tech": ["JavaScript", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Operators-in-JavaScript-Part_2"
    },
    {
      "id": 82, "title": "Intro to JS Assignment", "image": introToJsAssignment, "description": "An introductory assignment for JavaScript basics.", "tech": ["JavaScript", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Introduction-to-JavaScript-Assignment"
    },
    {
      "id": 83, "title": "Webpage Clone Project", "image": webpageCloneProject, "description": "A project to clone a popular webpage using HTML and CSS.", "tech": ["HTML", "CSS", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Webpage-Clone-Project"
    },
    {
      "id": 84, "title": "Tailwind CSS Assignment", "image": tailwindCssAssignment, "description": "An assignment to practice using Tailwind CSS.", "tech": ["Tailwind CSS", "HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Tailwind-CSS-Assignment"
    },
    {
      "id": 85, "title": "Bootstrap Assignment", "image": bootstrapAssignment, "description": "An assignment to practice using the Bootstrap framework.", "tech": ["Bootstrap", "HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Bootstrap-Assignment"
    },
    {
      "id": 86, "title": "Advanced CSS Assignment", "image": advancedCss, "description": "An assignment covering advanced CSS concepts.", "tech": ["CSS", "HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Advanced-CSS"
    },
    {
      "id": 87, "title": "CSS Selector Assignment", "image": cssSelectorAssignment, "description": "An assignment focused on mastering CSS selectors.", "tech": ["CSS", "HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/More-on-CSS-Selector-Assignment"
    },
    {
      "id": 88, "title": "Media Query Assignment", "image": mediaQueryAssignment, "description": "An assignment on using CSS media queries for responsive design.", "tech": ["CSS", "HTML", "Responsive Design"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Media-Query-Assignment"
    },
    {
      "id": 89, "title": "CSS Grid Assignment", "image": cssGridAssignment, "description": "An assignment to practice CSS Grid layout.", "tech": ["CSS", "HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/CSS-Grid-Assignment"
    },
    {
      "id": 90, "title": "Flexbox in CSS Assignment", "image": flexboxInCss, "description": "An assignment on using Flexbox for layouts.", "tech": ["CSS", "HTML", "Flexbox"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Flexbox-in-CSS"
    },
    {
      "id": 91, "title": "Positions in CSS Assignment", "image": positionsInCss, "description": "An assignment covering CSS positioning.", "tech": ["CSS", "HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Positions-in-CSS-Assignment"
    },
    {
      "id": 92, "title": "More on CSS Assignment", "image": moreOnCssAssignment, "description": "A follow-up assignment on CSS concepts.", "tech": ["CSS", "HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/More-on-CSS-Assignment"
    },
    {
      "id": 93, "title": "Starting with CSS Assignment", "image": startingWithCssAssignment, "description": "An introductory assignment to CSS.", "tech": ["CSS", "HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Starting-with-CSS-Assignment"
    },
    {
      "id": 94, "title": "SEO Assignment", "image": seoAssignment, "description": "An assignment on the basics of Search Engine Optimization.", "tech": ["SEO", "HTML"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/SEO-Assignment"
    },
    {
      "id": 95, "title": "Modern HTML Assignment", "image": modernHtmlAssignment, "description": "An assignment covering modern HTML5 features.", "tech": ["HTML", "HTML5"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Modern-HTML-Assignment"
    },
    {
      "id": 96, "title": "Media and Form Assignment", "image": mediaAndFormAssignment, "description": "An assignment on using media and forms in HTML.", "tech": ["HTML", "Forms"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Media-and-form-Assignment"
    },
    {
      "id": 97, "title": "Getting Started with HTML", "image": gettingStartedWithHtml, "description": "An introductory assignment to HTML.", "tech": ["HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/getting-started-with-html-assignment1"
    },
    {
      "id": 98, "title": "Core HTML Assignment", "image": coreHtmlAssignment, "description": "An assignment on the core concepts of HTML.", "tech": ["HTML", "Learning"], "category": "Learning", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Core-HTML-Assignment"
    },
    {
      "id": 99, "title": "Air Passengers Forecasting", "image": airPassengersForecast, "description": "A time-series forecasting project on air passenger data.", "tech": ["Python", "Time Series", "ML"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Air-Passengers-Time-series-forecasting"
    },
    {
      "id": 100, "title": "Lock Screen", "image": lockScreen, "description": "A simple lock screen implementation.", "tech": ["Java", "Android"], "category": "Mobile", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/lock-screen"
    },
    {
      "id": 101, "title": "Region Growing", "image": regionGrowing, "description": "An image segmentation algorithm implementation.", "tech": ["Python", "OpenCV", "Computer Vision"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Region-Growing"
    },
    {
      "id": 102, "title": "Image Segmentation Grayscale", "image": imgSegmentationGrayscale, "description": "Image analysis for segmentation of grayscale images.", "tech": ["MATLAB", "Image Processing"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/image-analysis-for-segmentation-of-grayscale-image"
    },
    {
      "id": 103, "title": "User Management", "image": userManagement, "description": "A simple user management system with CRUD operations.", "tech": ["HTML", "JavaScript"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/USER_MANAGEMENt"
    },
    {
      "id": 104, "title": "Quiz Web", "image": quizWeb, "description": "A web-based quiz application.", "tech": ["JavaScript", "HTML"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/QUIZ_WEB"
    },
    {
      "id": 105, "title": "React Movie App", "image": reactMovieApp, "description": "A movie browsing application built with React.", "tech": ["React", "API"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/React_MOVIEAPP"
    },
    {
      "id": 106, "title": "Country Location", "image": countryLocation, "description": "An app to find and display information about countries.", "tech": ["JavaScript", "API"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Country_Location"
    },
    {
      "id": 107, "title": "MATLAB Fingerprint", "image": matlabFingerprint, "description": "A project on fingerprint recognition using MATLAB.", "tech": ["MATLAB", "Biometrics"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/MATLAB_FingerPrint"
    },
    {
      "id": 108, "title": "Digital Image Processing Exam", "image": dipHomeExam, "description": "Home exam project for a digital image processing course.", "tech": ["Python", "Image Processing"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/digital-image-processing-home-exam"
    },
    {
      "id": 109, "title": "Financial Analysis RAG", "image": financialAnalysisRag, "description": "A financial analysis project using a Retrieval-Augmented Generation (RAG) model.", "tech": ["Jupyter", "Python", "RAG", "AI"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/financial-analysis-rag"
    },
    {
      "id": 110, "title": "Bifoga", "image": bifoga, "description": "A project with an unspecified purpose, named Bifoga.", "tech": ["JavaScript", "React"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Bifoga"
    },
    {
      "id": 111, "title": "Alien Invasion Game", "image": alienInvasionGame, "description": "A classic alien invasion shooter game built with Pygame.", "tech": ["Python", "Pygame", "Game"], "category": "Game Development", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/alien-invasion-game"
    },
    {
      "id": 112, "title": "Amazon Clone", "image": amazonClone, "description": "A clone of the Amazon e-commerce website's frontend.", "tech": ["HTML", "CSS", "JavaScript"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Amazon_Clone"
    },
    {
      "id": 113, "title": "Whether Web", "image": whetherWeb, "description": "A simple weather web application.", "tech": ["CSS", "HTML", "API"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Whether-web"
    },
    {
      "id": 114, "title": "React Typescript Pro", "image": reactTypescriptPro, "description": "A boilerplate or example project for professional React development with TypeScript.", "tech": ["React", "TypeScript", "Boilerplate"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/React-Typescript-Pro"
    },
    {
      "id": 115, "title": "Simple Calculator 2", "image": simpleCalculator2, "description": "Another simple calculator implementation.", "tech": ["JavaScript", "HTML"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Simple_Calculator"
    },
    {
      "id": 116, "title": "Contact Display", "image": contactDisplay, "description": "An application to display contact information.", "tech": ["HTML", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Contact-Display"
    },
    {
      "id": 117, "title": "Kilimani", "image": kilimani, "description": "A project with an unspecified purpose, named Kilimani.", "tech": ["HTML", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Kilimani"
    },
    {
      "id": 118, "title": "E-Commers", "image": eCommers, "description": "An e-commerce website project.", "tech": ["HTML", "CSS", "JavaScript"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/E_Commers"
    },
    {
      "id": 119, "title": "Python AI", "image": pythonAI, "description": "A repository for various AI projects written in Python.", "tech": ["Python", "AI"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Python-AI"
    },
    {
      "id": 120, "title": "RadarScope", "image": radarscope, "description": "A project possibly related to radar data visualization or analysis.", "tech": ["Python", "Data Visualization"], "category": "Data", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/RadarScope"
    },
    {
      "id": 121, "title": "Guess The Number", "image": guessTheNumber, "description": "A simple guess the number game.", "tech": ["HTML", "CSS", "JavaScript"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Guess_the_NUMBER"
    },
    {
      "id": 122, "title": "Udemy Clone", "image": udemyClone, "description": "A clone of the Udemy website's interface.", "tech": ["HTML", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Udemy_Clone"
    },
    {
      "id": 123, "title": "Shopping Nostra", "image": shoppingNostra, "description": "An e-commerce or shopping-related project.", "tech": ["HTML", "CSS"], "category": "Frontend", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Shopping_NOSTRA"
    },
    {
      "id": 124, "title": "Skill Share Grow", "image": skillShareGrow, "description": "A platform for sharing and growing skills.", "tech": ["JavaScript", "HTML"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Skill_share_grow_final"
    },
    {
      "id": 125, "title": "Emotion Detector", "image": emotionDetector, "description": "An application that detects emotions, likely from text or images.", "tech": ["HTML", "JavaScript", "AI"], "category": "AI/ML", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/emotion-detector"
    },
    {
      "id": 126, "title": "Skill Sharing Growing", "image": skillSharingGrowing, "description": "A platform for skill sharing and community growth.", "tech": ["SCSS", "JavaScript"], "category": "Full-Stack", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/Skill-Sharing-Growing"
    },
    {
      "id": 127, "title": "Tech Dev Club", "image": techDevClub, "description": "The official website and platform for the Tech Dev Club community.", "tech": ["React", "TypeScript", "Community"], "category": "Full-Stack", "demoLink": "https://techdevclub.com/", "sourceLink": "https://github.com/Brajesh31/Tech_Dev_Club"
    },
    {
      "id": 128, "title": "MazeCrafter", "image": mazeCrafter, "description": "A project for generating and possibly solving mazes.", "tech": ["TypeScript", "Algorithms"], "category": "Tool", "demoLink": "", "sourceLink": "https://github.com/Brajesh31/MazeCrafter"
    }
  ];

  const projects = allProjects.map((project, index) => ({
    ...project,
    color: colors[index % colors.length]
  }));

  const colorVariants = {
    blue: {
      border: "border-blue-500/20",
      bg: "bg-blue-500/10",
      text: "text-blue-400"
    },
    amber: {
      border: "border-amber-500/20",
      bg: "bg-amber-500/10",
      text: "text-amber-400"
    },
    emerald: {
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400"
    },
    violet: {
      border: "border-violet-500/20",
      bg: "bg-violet-500/10",
      text: "text-violet-400"
    },
    red: {
      border: "border-red-500/20",
      bg: "bg-red-500/10",
      text: "text-red-400"
    },
    cyan: {
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/10",
      text: "text-cyan-400"
    },
    green: {
      border: "border-green-500/20",
      bg: "bg-green-500/10",
      text: "text-green-400"
    }
  };

  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.fromTo(card,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
      );
    });
  }, []);

  return (
      <div className="min-h-screen bg-black text-white">
        <header className="py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            A comprehensive showcase of my projects, from foundational concepts to advanced AI systems.
          </p>
        </header>

        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto space-y-8">
            {projects.map((project, index) => {
              const colorVariant = colorVariants[project.color] || colorVariants.blue;

              return (
                  <div
                      key={project.id}
                      ref={el => { if (el) cardsRef.current[index] = el; }}
                      className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                        <div className="absolute top-4 right-4 text-4xl md:text-5xl font-black text-white/10">
                          {String(project.id).padStart(2, '0')}
                        </div>
                      </div>

                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-3">
                          {project.category}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {project.title}
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((tech, techIndex) => (
                              <span
                                  key={techIndex}
                                  className={`px-3 py-1.5 rounded-full text-sm font-medium border ${colorVariant.border} ${colorVariant.bg} ${colorVariant.text}`}
                              >
                          {tech}
                        </span>
                          ))}
                        </div>
                        <div className="flex gap-4 flex-wrap">
                          <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 hover:transform hover:-translate-y-1 transition-all duration-300"
                          >
                            View Demo
                          </a>
                          <a
                              href={project.sourceLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-transparent text-white border-2 border-gray-600 rounded-full font-semibold hover:border-gray-400 hover:transform hover:-translate-y-1 transition-all duration-300"
                          >
                            Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </section>
      </div>
  );
};

export default ProjectShowcase;