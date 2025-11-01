
import { Sparkles, Target, TrendingUp, Award } from 'lucide-react';

const NextStepFeatures = () => {
  const features = [
    {
      icon: <Sparkles size={24} />,
      title: "AI Career Suggestion",
      description: "Get personalized career recommendations based on your interests, skills, and goals."
    },
    {
      icon: <Target size={24} />,
      title: "Skill Mapping",
      description: "Identify skill gaps and create targeted learning paths to reach your career goals."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with comprehensive analytics and milestone tracking."
    },
    {
      icon: <Award size={24} />,
      title: "Expert Guidance",
      description: "Access curated resources and roadmaps designed by industry professionals."
    }
  ];

  const styles = {
    container: {
      backgroundColor: '#fafafa',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '16px'
    },
    subtitle: {
      fontSize: '18px',
      color: '#6b7280',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    grid: {
      display: 'flex',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1300px',
      margin: '0 auto'
    },
    card: {
      background: 'white',
      borderRadius: '12px',
      padding: '32px 24px',
      border: '1px solid #e5e7eb',
      transition: 'all 0.3s ease'
    },
    iconWrapper: {
      width: '56px',
      height: '56px',
      background: '#e0f2fe',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      color: '#0284c7'
    },
    featureTitle: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '12px'
    },
    featureDescription: {
      fontSize: '15px',
      color: '#6b7280',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Why Choose NextStep AI?</h1>
        <p style={styles.subtitle}>
          Powerful features designed to accelerate your career growth and learning journey.
        </p>
      </div>

      <div style={styles.grid}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.iconWrapper}>
              {feature.icon}
            </div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextStepFeatures;