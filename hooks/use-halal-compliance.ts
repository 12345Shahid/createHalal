// /hooks/use-halal-compliance.ts
// Custom hook for managing Halal compliance checking and filtering

import { useState, useCallback } from 'react';
import { halalContentFilter } from '@/lib/tools/blog/halal/content-filter';
import { complianceChecker } from '@/lib/tools/blog/halal/compliance-checker';

export function useHalalCompliance() {
  const [checking, setChecking] = useState(false);
  const [compliance, setCompliance] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const checkCompliance = useCallback(async (content: string) => {
    try {
      setChecking(true);
      setError(null);
      const results = await complianceChecker.checkCompliance(content);
      setCompliance(results);
      return results;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Compliance check failed');
    } finally {
      setChecking(false);
    }
  }, []);

  return { checking, compliance, error, checkCompliance };
}
