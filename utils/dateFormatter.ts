import { UserPreferences } from '@/types/preferences';

export function formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
  // Implementation
  return date.toISOString();
}

export function parseDate(dateString: string): Date {
  return new Date(dateString);
} 