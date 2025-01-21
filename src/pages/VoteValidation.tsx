import '../i18n';
import { Header } from "../components/Header";
import { getCredentialData } from '../hooks/getCredentialData';
import { CredentialDisplay } from '../components/CredentialDisplay';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import './styles.css';

const VoteValidation: React.FC = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(true);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const { data, error, done } = await getCredentialData();
      setData(data);
      setError(error);
      setDone(done);
    } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
        setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && !data) {
        navigate("/request-firma");
    }
  }, [loading, data, navigate]); // Only runs when loading, data, or navigate changes

  return (
    <div>
      <Header />
      <div className="container">
      <h1 className="card-title">Voting System - Citizen Identity Validation</h1>  
      <h2 className="card-subtitle">{t('vc')}</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : done && data ? (
        <CredentialDisplay data={data} />
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
}

export default VoteValidation;