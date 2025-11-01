import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle, Briefcase } from 'lucide-react';

const CareerAdvisor = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'interests',
      question: 'What interests you the most?',
      options: [
        { value: 'technology', label: 'Technology & Innovation' },
        { value: 'creative', label: 'Creative Arts & Design' },
        { value: 'business', label: 'Business & Management' },
        { value: 'science', label: 'Science & Research' },
        { value: 'helping', label: 'Helping People & Healthcare' },
        { value: 'education', label: 'Education & Training' }
      ]
    },
    {
      id: 'workStyle',
      question: 'What work environment suits you best?',
      options: [
        { value: 'independent', label: 'Working independently' },
        { value: 'team', label: 'Collaborating with teams' },
        { value: 'mixed', label: 'Mix of both' },
        { value: 'leadership', label: 'Leading and managing others' }
      ]
    },
    {
      id: 'skills',
      question: 'Which skills do you excel at?',
      options: [
        { value: 'analytical', label: 'Analytical & Problem-solving' },
        { value: 'communication', label: 'Communication & Persuasion' },
        { value: 'technical', label: 'Technical & Programming' },
        { value: 'creative', label: 'Creative & Artistic' },
        { value: 'organizational', label: 'Organization & Planning' }
      ]
    },
    {
      id: 'education',
      question: 'What is your current education level?',
      options: [
        { value: 'highschool', label: 'High School / Planning to study' },
        { value: 'bachelor', label: "Bachelor's Degree / Pursuing" },
        { value: 'master', label: "Master's Degree / Pursuing" },
        { value: 'professional', label: 'Professional / Working' }
      ]
    },
    {
      id: 'goals',
      question: 'What matters most to you in a career?',
      options: [
        { value: 'income', label: 'High income potential' },
        { value: 'impact', label: 'Making a positive impact' },
        { value: 'balance', label: 'Work-life balance' },
        { value: 'growth', label: 'Learning and growth opportunities' },
        { value: 'stability', label: 'Job security and stability' }
      ]
    }
  ];

  const careerDatabase = {
    'technology-independent-technical': {
      title: 'Software Developer / Engineer',
      description: 'Design, develop, and maintain software applications and systems.',
      skills: ['Programming', 'Problem-solving', 'Algorithm design'],
      salary: '$80k - $180k+',
      growth: 'High demand, 25% growth projected'
    },
    'creative-team-creative': {
      title: 'UX/UI Designer',
      description: 'Design user interfaces and experiences for digital products.',
      skills: ['User research', 'Prototyping', 'Design thinking'],
      salary: '$70k - $130k',
      growth: 'High demand in tech industry'
    }
    // ... (keep rest same)
  };

  const analyzeAnswers = () => {
    const { interests, workStyle, skills } = answers;
    const careerKey = `${interests}-${workStyle}-${skills}`;
    return careerDatabase[careerKey] || careerDatabase['technology-independent-technical'];
  };

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[step].id]: value });
    if (step < questions.length - 1) setStep(step + 1);
    else setShowResults(true);
  };

  const handleBack = () => step > 0 && setStep(step - 1);
  const handleRestart = () => { setStep(0); setAnswers({}); setShowResults(false); };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f3e8ff, #e0f2fe, #e0e7ff)',
      padding: '40px'
    },
    card: {
      maxWidth: '700px',
      margin: 'auto',
      backgroundColor: '#fff',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      padding: '40px'
    },
    button: {
      width: '100%',
      textAlign: 'left',
      padding: '16px',
      border: '2px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#fff',
      cursor: 'pointer',
      fontSize: '16px',
      color: '#333',
      transition: 'all 0.3s ease'
    },
    buttonHover: {
      borderColor: '#8b5cf6',
      backgroundColor: '#f5f3ff'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    progressBar: {
      height: '8px',
      borderRadius: '10px',
      backgroundColor: '#e5e7eb',
      overflow: 'hidden',
      marginBottom: '30px'
    },
    progressFill: (width) => ({
      width: `${width}%`,
      height: '100%',
      background: 'linear-gradient(to right, #8b5cf6, #6366f1)',
      transition: 'width 0.3s ease'
    }),
    primaryButton: {
      width: '100%',
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      background: 'linear-gradient(to right, #7c3aed, #4f46e5)',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '20px'
    }
  };

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  if (showResults) {
    const career = analyzeAnswers();
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <CheckCircle size={50} color="#16a34a" />
            <h1 style={{ fontSize: '28px', margin: '10px 0', color: '#111827' }}>Your Career Pathway</h1>
            <p style={{ color: '#6b7280' }}>Based on your responses, we recommend:</p>
          </div>

          <div style={{
            background: 'linear-gradient(to right, #8b5cf6, #6366f1)',
            color: 'white',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px'
          }}>
            <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>{career.title}</h2>
            <p style={{ fontSize: '15px', marginBottom: '15px' }}>{career.description}</p>
            <p><strong>Salary:</strong> {career.salary}</p>
            <p><strong>Growth:</strong> {career.growth}</p>
            <div style={{ marginTop: '10px' }}>
              <strong>Skills:</strong>
              <div style={{ marginTop: '6px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {career.skills.map((s, i) => (
                  <span key={i} style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '13px'
                  }}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          <button onClick={handleRestart} style={styles.primaryButton}>
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <Sparkles size={50} color="#8b5cf6" />
          <h1 style={{ fontSize: '28px', color: '#111827', margin: '10px 0' }}>AI Career Advisor</h1>
          <p style={{ color: '#6b7280' }}>Answer a few questions to discover your ideal career path</p>
        </div>

        <div style={styles.progressBar}>
          <div style={styles.progressFill(progress)}></div>
        </div>

        <h2 style={{ fontSize: '22px', marginBottom: '20px', color: '#111827' }}>
          {currentQuestion.question}
        </h2>

        {currentQuestion.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
            style={styles.button}
          >
            {option.label}
          </button>
        ))}

        {step > 0 && (
          <button
            onClick={handleBack}
            style={{
              marginTop: '20px',
              background: 'none',
              border: 'none',
              color: '#6b7280',
              cursor: 'pointer',
              fontSize: '15px'
            }}
          >
            ← Previous Question
          </button>
        )}
      </div>
    </div>
  );
};

export default CareerAdvisor;