import { PreferencesService } from '@/services/preferences';
import { db } from '@/lib/firebase/admin';

jest.mock('@/lib/firebase/admin', () => ({
  db: {
    collection: jest.fn(),
  },
}));

describe('PreferencesService', () => {
  const mockUserId = 'test-user-id';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return default preferences for new user', async () => {
    const mockGet = jest.fn().mockResolvedValue({ exists: false });
    (db.collection as jest.Mock).mockReturnValue({
      doc: jest.fn().mockReturnValue({ get: mockGet }),
    });

    const prefs = await PreferencesService.getUserPreferences(mockUserId);
    expect(prefs.theme).toBe('light');
  });

  // Add more test cases to cover different scenarios
});