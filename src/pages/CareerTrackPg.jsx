import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Bookmark } from 'lucide-react';

const DeveloperRoadmaps = () => {
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(new Set());

  const roadmaps = [
    { id: 1, title: 'Frontend' },
    { id: 2, title: 'Backend' },
    { id: 3, title: 'Full Stack' },
    { id: 4, title: 'DevOps' },
    { id: 5, title: 'Data Analyst' },
    { id: 6, title: 'AI Engineer' },
    { id: 7, title: 'AI and Data Scientist' },
    { id: 8, title: 'Data Engineer' },
    { id: 9, title: 'Android' },
    { id: 10, title: 'Machine Learning' },
    { id: 11, title: 'PostgreSQL' },
    { id: 12, title: 'iOS' }
  ];

  const toggleBookmark = (id) => {
    setBookmarked(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#e0f2ff',
      color: '#fff',
      padding: '60px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '80px'
    },
    title: {
      fontSize: '64px',
      fontWeight: '700',
      color: '#007bff',
      marginBottom: '24px',
      letterSpacing: '-0.02em'
    },
    description: {
      fontSize: '18px',
      color: '#000000',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.7'
    },
    highlight: {
      color: '#fff',
      fontWeight: '500'
    },
    sectionTitle: {
      fontSize: '20px',
      color: '#000000',
      textAlign: 'center',
      marginBottom: '40px',
      fontWeight: '500'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    card: {
      background: '#000000',
      border: '1px solid rgba(148, 163, 184, 0.2)',
      borderRadius: '12px',
      padding: '24px 28px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)'
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '500',
      color: '#e2e8f0'
    },
    bookmarkIcon: {
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Developer Roadmaps</h1>
        <p style={styles.description}>
          NextStep AI is a community effort to create career tracks, guides, and other educational content that help freshers and professionals choose a path and guide their learning journey.
        </p>
      </div>

      <div style={styles.sectionTitle}>Role-based Roadmaps</div>

      <div style={styles.grid}>
        {roadmaps.map((roadmap) => (
          <div
            key={roadmap.id}
            style={styles.card}
            onClick={() => navigate(`/roadmap/${roadmap.id}`)} // 👈 add this
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={styles.cardTitle}>{roadmap.title}</span>
            <Bookmark
              size={20}
              style={styles.bookmarkIcon}
              color={bookmarked.has(roadmap.id) ? '#a78bfa' : '#64748b'}
              fill={bookmarked.has(roadmap.id) ? '#a78bfa' : 'none'}
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(roadmap.id);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperRoadmaps;