import React, { useState } from 'react';

function App() {
  const [emailContext, setEmailContext] = useState('');
  const [tone, setTone] = useState('professional');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setGeneratedReply('');

    try {
      const response = await fetch('http://localhost:8080/api/email/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          emailContent: emailContext,
          tone: tone
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate email');
      }

      const data = await response.text();
      setGeneratedReply(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEmailContext('');
    setGeneratedReply('');
    setError('');
  };


  return (
    <div
      style={{
        padding: '40px',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f1f8f4',
        borderRadius: '12px'
      }}
    >
      <h2 style={{ color: '#2e7d32', marginBottom: '16px' }}>
        Smart Email Assistant
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '24px', marginTop: '8px' }}>
          {/* Email Context */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label
              htmlFor="emailContext"
              style={{ marginBottom: '6px', fontWeight: '600', color: '#2e7d32' }}
            >
              Enter email context
            </label>
            <textarea
              id="emailContext"
              rows="6"
              value={emailContext}
              onChange={(e) => setEmailContext(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #a5d6a7',
                outline: 'none',
                fontSize: '14px'
              }}
            />
          </div>

          {/* Tone */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label
              htmlFor="tone"
              style={{ marginBottom: '6px', fontWeight: '600', color: '#2e7d32' }}
            >
              Select Tone
            </label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              style={{
                padding: '10px',
                minWidth: '160px',
                borderRadius: '8px',
                border: '1px solid #a5d6a7',
                backgroundColor: '#ffffff',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="friendly">Friendly</option>
              <option value="formal">Formal</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '10px 22px',
              backgroundColor: '#a5d6a7',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Generating...' : 'Generate Reply'}
          </button>

          <button
            type="button"
            onClick={handleClear}
            disabled={loading}
            style={{
              padding: '10px 22px',
              backgroundColor: '#c8e6c9',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            Clear
          </button>
        </div>
      </form>

      {error && <p style={{ color: '#c62828', marginTop: '16px' }}>{error}</p>}

      {generatedReply && (
        <div
          style={{
            marginTop: '24px',
            whiteSpace: 'pre-wrap',
            background: '#e8f5e9',
            padding: '14px',
            borderRadius: '8px',
            border: '1px solid #a5d6a7'
          }}
        >
          <h3 style={{ color: '#2e7d32' }}>Generated Reply</h3>
          <p>{generatedReply}</p>
        </div>
      )}
    </div>
  );

}

export default App;
