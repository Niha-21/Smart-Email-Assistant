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
    <div style={{ padding: '40px', fontFamily: 'Arial', maxWidth: '600px', margin: 'auto' }}>
      <h2>Smart Email Assistant</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="emailContext" style={{ marginBottom: '4px', display: 'inline-block' }}>
              Enter email context:
            </label>
            <textarea
              id="emailContext"
              rows="6"
              style={{ width: '100%', padding: '8px' }}
              value={emailContext}
              onChange={(e) => setEmailContext(e.target.value)}
              required
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <label htmlFor="tone" style={{ marginBottom: '4px', display: 'inline-block' }}>
              Select Tone:
            </label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              style={{ padding: '8px', minWidth: '150px' }}
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="friendly">Friendly</option>
              <option value="formal">Formal</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '10px 20px',              
              backgroundColor: '#eee',
              border: '1px solid #ccc',
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
              padding: '10px 20px',
              backgroundColor: '#eee',
              border: '1px solid #ccc',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            Clear
          </button>
        </div>

      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {generatedReply && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap', background: '#f3f3f3', padding: '10px' }}>
          <h3>Generated Reply:</h3>
          <p>{generatedReply}</p>
        </div>
      )}
    </div>
  );
}

export default App;
